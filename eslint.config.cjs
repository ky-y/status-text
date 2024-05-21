module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    settings: {
        react: {
            version: "detect"
        },
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                "objectsInObjects": false
            }
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "sort-imports": [
            "error",
            {
                "allowSeparatedGroups": true,
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
            }
        ],
        "import/order": [
            "error",
            {
                groups: [["builtin", "external", "type"], "parent"],
                pathGroups: [
                    {
                        pattern: "~/libs/**",
                        group: "parent",
                        position: "before"
                    }
                ],
                pathGroupsExcludedImportTypes: [],
                alphabetize: {
                    order: "asc"
                },
                "newlines-between": "always",
                warnOnUnassignedImports: true
            }
        ]
    }
};