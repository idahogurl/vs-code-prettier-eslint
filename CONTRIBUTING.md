## Contributing

[fork]: https://github.com/idahogurl/vs-code-prettier-eslint/fork
[pr]: https://github.com/idahogurl/vs-code-prettier-eslint/pulls
[style]: https://github.com/airbnb/javascript
[code-of-conduct]: CODE_OF_CONDUCT.md

Hi there! I'm thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.

## Issues and Pull Requests

If you have suggestions for how this project could be improved, or want to report a bug, open an issue! I'd love all and any contributions. If you have questions, too, I'd love to hear them.

Feel free to look at [issues](https://github.com/idahogurl/vs-code-prettier-eslint/-/issues) to find outstanding issues. I've marked some as "Good first issue" for those wanting to get their feet wet. I also need people willing to review Pull Requests or update documentation.

I'd also love Pull Requests. If you're thinking of a large pull request, please consider opening up an issue first to talk about it first! Look at the links below if you're not sure how to open a pull request.

## Add yourself as a contributor

This project follows the all contributors specification. To add yourself to the table of contributors on the README.md, please run the automated scripts as part of your pull request:

`yarn contributors:add`

followed by

`yarn contributors:generate`

Commit .all-contributorsrc and README.md in the pull request. If you've already added yourself to the list and are making a new type of contribution, you can run it again and select the added contribution type.

## Submitting a pull request

1. [Fork][fork] and clone the repository.
1. Configure and install the dependencies: `yarn install`.
1. Make sure the tests pass on your machine: `yarn test`, note: these tests also apply the linter, so there's no need to lint separately.
1. Create a new branch: `git checkout -b my-branch-name`.
1. Make your change, add tests, and make sure the tests still pass.
1. Push to your fork and [submit a pull request][mr].
1. Pat your self on the back and wait for your pull request to be reviewed and merged.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide][style] which is using standard. Any linting errors should be shown when running `yarn test`.
- Write and update tests.
- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress (WIP) Pull Requests are also welcome to get feedback early on, or if there is something stumping you.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://docs.github.com/ee/user/project/merge_requests/getting_started.html)
- [github Help](https://about.github.com/get-help/)
