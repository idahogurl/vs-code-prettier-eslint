module.exports = {
    extends: './.eslintrc.js',
    rules: {
        'comma-dangle': [
            2,
            {
                imports:   'never',
                exports:   'never',
                arrays:    'always-multiline',
                objects:   'never', // <-- changed from 'always-multiline' of .eslintrc.js
                functions: 'always-multiline',
            },
        ]
    }
};
