module.exports = {
    rules: {
        indent: [
            2, 4, {
                SwitchCase: 1
            }
        ],
        quotes: [
            2, 'single'
        ],
        'linebreak-style': [
            2, 'unix'
        ],
        semi: [
            2, 'always'
        ]
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        jasmine: true
    },
    extends: [
        'airbnb',
        'eslint:recommended'
    ],
    ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true
    },
    plugins: [
        'react'
    ]
};
