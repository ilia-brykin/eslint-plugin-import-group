# eslint-plugin-import-group

ESLint plugin for enforcing import grouping and named import sorting.

## Installation

You can install `eslint-plugin-import-group` using npm, yarn, or pnpm:

```bash
# Using npm
$ npm install eslint-plugin-import-group --save-dev

# Using yarn
$ yarn add eslint-plugin-import-group --dev

# Using pnpm
$ pnpm add eslint-plugin-import-group --save-dev
```

***

## Usage

### ESLint Configuration

#### `eslint.config.js` or `eslint.config.mjs`

```js
import groupImportsPlugin from "eslint-plugin-import-group";

export default {
  plugins: {
    "group-imports": groupImportsPlugin,
  },
  rules: {
    "group-imports/named-imports": ["warn", {
      sort: "asc",
      newline: true,
    }],
    "group-imports/group-imports": ["warn", {
      groups: [
        {
          name: "Core Imports",
          patterns: [
            { exact: "vue" },
            { exact: "vue-router" },
            { exact: "aloha-vue" },
          ],
        },
        {
          name: "Components",
          patterns: [
            { regex: ".vue$" },
          ],
          sort: "asc",
        },
        {
          name: "Third-Party Libraries",
          patterns: [
            { exact: "_rest_", sort: "desc" },
            { exact: "lodash-es" },
          ],
        },
      ],
      emptyLinesBetweenGroups: 1,
    }],
  },
};
```
***

## Rules

Below is a summary of the available rules:

| Rule                                                                                                        | Description                                                                                           | Fixable  |
|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|----------|
| [group-imports](https://github.com/ilia-brykin/eslint-plugin-import-group/blob/main/docs/group-imports.md)  | Enforces specific grouping and ordering of import statements based on custom-defined groups.          | ✅        |
| [named-imports](https://github.com/ilia-brykin/eslint-plugin-import-group/blob/main/docs/named-imports.md)  | Enforces alphabetical sorting of named imports and optionally formats them with new lines.            | ✅        |

***

## Disabling Conflicting Rules
To avoid conflicts, disable `import/order` from `eslint-plugin-import` and `sort-imports` from ESLint:
```js
rules: {
  "import/order": "off",
  "sort-imports": "off",
}
```
