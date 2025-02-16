# eslint-plugin-group-imports

ESLint plugin for enforcing import grouping and named import sorting.

## Installation

You can install `eslint-plugin-group-imports` using npm, yarn, or pnpm:

```bash
# Using npm
$ npm install eslint-plugin-group-imports --save-dev

# Using yarn
$ yarn add eslint-plugin-group-imports --dev

# Using pnpm
$ pnpm add eslint-plugin-group-imports --save-dev
```

## Usage

### ESLint Configuration

#### `eslint.config.js` or `eslint.config.mjs`

```js
import groupImportsPlugin from "eslint-plugin-group-imports";

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
      newlineBetweenGroups: 1,
    }],
  },
};
```

## Rules

### `group-imports/group-imports`
This rule enforces import grouping based on user-defined patterns.

#### **Options**
- `groups` (array): Defines import grouping rules. Each group consists of a `name` and `patterns` that define which imports belong to the group. A pattern can be either `exact` (matching a specific module, e.g., `vue`) or `regex` (matching modules via a regular expression, e.g., `\.vue$`).

- **Sorting within groups and subgroups:** A group can specify `sort` (`"asc"` or `"desc"`), applying alphabetical sorting to imports within the group. If `sort` is set at the subgroup level, it takes precedence over the group's sort setting.
- **Handling unmatched imports:** Imports that do not match any group are assigned to `_rest_`. If `_rest_` is not explicitly defined in the configuration, a `_rest_` group will be automatically added at the end.
- **Example:**
  ```js
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
        { regex: "\.vue$" },
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
  ]
  ```
- `newlineBetweenGroups` (integer, 0-5): Number of blank lines between groups.

#### **Example**
##### ✅ **Correct Code**
```js
import { defineComponent } from "vue";

import { AModalConfirm, ANotification } from "aloha-vue";

import MyComponent from "../components/MyComponent.vue";
```
##### ❌ **Incorrect Code**
```js
import MyComponent from "../components/MyComponent.vue";
import { defineComponent } from "vue";
import { AModalConfirm, ANotification } from "aloha-vue";
```

### `group-imports/named-imports`
This rule enforces sorting of named imports within `{}` and formats them with new lines if required.

#### **Options**
- `sort` (string): Defines sorting order (`"asc"`, `"desc"`, or `"none"`).
- `newline` (boolean): Whether each named import should be placed on a new line.

#### **Example**
##### ✅ **Correct Code** (`sort: "asc", newline: true`)
```js
import {
  cloneDeep,
  forEach,
} from "lodash-es";
```
##### ❌ **Incorrect Code**
```js
import { forEach, cloneDeep } from "lodash-es";
```

## Fixing Issues
Both rules support ESLint's `--fix` flag:
```bash
npx eslint --fix your-file.js
```

## Disabling Conflicting Rules
To avoid conflicts, disable `import/order` from `eslint-plugin-import` and `sort-imports` from ESLint:
```js
rules: {
  "import/order": "off",
  "sort-imports": "off",
}
```

