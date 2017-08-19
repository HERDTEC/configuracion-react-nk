{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "eol-last": [
            "error",
             "always"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "keyword-spacing": 
        [
            "error",
            { "before": true }
        ],
        "space-before-function-paren": 
        [
            "error", 
            "always"
        ],
        "eqeqeq": 
        [
            "error", 
            "always"
        ]
    }
}