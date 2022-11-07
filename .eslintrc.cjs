/** Разрешенные импорты (для сортировки) */
const ALLOWED_PATH_GROUPS = ["pages/**", "features/**", "entities/**", "shared/**"].map(
    (pattern) => ({
        pattern,
        group: "internal",
        position: "after",
    }),
);

/** Для запрета приватных путей */
const DENIED_PATH_GROUPS = [
    // Private imports are prohibited, use public imports instead
    "app/**",
    "pages/*/**",
    "features/*/**",
    "entities/*/**",
    "shared/*/*/**", // Для shared +1 уровень, т.к. там чаще мы обращаемся к конкретной библиотеке/компоненты
    // Prefer absolute imports instead of relatives (for root modules)
    "../**/app",
    "../**/pages",
    "../**/features",
    "../**/entities",
    "../**/shared",
];

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        sourceType: "module",
    },
    env: {
        browser: true,
        es6: true,
        node: true
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        // "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // "plugin:prettier/recommended",
        "plugin:react/recommended",
        // "prettier",
    ],
    rules: {
        // TODO: eslint-plugin-boundaries
        "import/order": [
            2,
            {
                pathGroups: ALLOWED_PATH_GROUPS,
                pathGroupsExcludedImportTypes: ["builtin"],
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
            },
        ],
        "no-restricted-imports": [
            2, 
            {
                patterns: DENIED_PATH_GROUPS
            }
        ],
    },
};