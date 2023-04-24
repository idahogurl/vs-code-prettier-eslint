module.exports = {
    extends: './eslintrc.js',
    rules: {
        'comma-dangle': [
            2,
            {
                imports:   'never',
                exports:   'never',
                arrays:    'always-multiline',
                objects:   'never',
                functions: 'always-multiline',
            },
        ]
    }
};
