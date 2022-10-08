const { runCLI } = require('jest');

const path = require('path');

module.exports = {
  run: (_, reportTestResults) => {
    const projectRootPath = process.cwd();
    const config = path.join(projectRootPath, 'jest.config.js');
    const runArgV = { config };
    if (process.env.SNAPSHOT_UPDATE) {
      runArgV.updateSnapshot = true;
    }
    runCLI(runArgV, [projectRootPath])
      .then((jestCliCallResult) => {
        jestCliCallResult.results.testResults.forEach((testResult) => {
          testResult.testResults
            .filter((assertionResult) => assertionResult.status === 'passed')
            .forEach(({ ancestorTitles, title, status }) => {
              console.info(`  ● ${ancestorTitles} > ${title} (${status})`);
            });
        });

        jestCliCallResult.results.testResults.forEach((testResult) => {
          if (testResult.failureMessage) {
            console.error(testResult.failureMessage);
          }
        });

        reportTestResults(undefined, jestCliCallResult.results.numFailedTests);
      })
      .catch((errorCaughtByJestRunner) => {
        reportTestResults(errorCaughtByJestRunner, 0);
      });
  },
};
