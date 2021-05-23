const eslintrc = {
    env: {
        browser: true,
        node: true,
        jasmine: true,
        es6: true,
        jest: true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        quotes: [1, 'single', {allowTemplateLiterals: true}],
        semi: [2, 'never'],
        'space-before-function-paren': 0,
    }
}

module.exports = eslintrc