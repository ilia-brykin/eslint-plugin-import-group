# named-imports

## Details
The **named-imports** rule enforces the alphabetical sorting of **named imports** (imports enclosed in curly braces) and optionally formats them with each item on a new line. This rule ensures that named imports are organized consistently throughout your codebase, improving readability and maintainability.

***

## Options

- `sort` (`string`): Specifies the **sorting order** for named imports.
    - Allowed values: `"asc"` for ascending order, `"desc"` for descending order, or `"none"` to leave the imports unsorted.

- `newline` (`boolean`): Determines whether each named import should be placed on a **new line**.
    - When set to `true`, each imported member will be on a **separate line**.
    - When set to `false`, all named imports will remain on a **single line**.
    - Defaults to `true`.

- `indent` (`integer`): Defines the number of **spaces** for indentation inside the curly braces.
    - Defaults to `2` when `newline` is `true` and to `1` when `newline` is `false`.

***

## Usage

To enable the **named-imports** rule, add it to the `rules` section of your ESLint configuration under the `eslint-plugin-import-group` plugin. This rule supports ESLint’s `--fix` flag, which automatically reorders and formats named imports according to the specified options.
To prevent conflicts, disable any overlapping rules (such as `sort-imports`) in your ESLint settings.

***

## Examples

### Basic

#### ✅ **Correct Code**

```javascript
import {
  AButton,
  ALink,
  ATable,
} from "aloha-vue";
```

#### ❌ **Incorrect Code**

```javascript
import { ALink,
  AButton,
  ATable,
} from "aloha-vue";
```

***

## Examples

### sort

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    sort: "asc",
  }]
}
```
#### ✅ **Correct Code**

```javascript
import {
  AButton,
  ALink,
  ATable,
} from "aloha-vue";
```

#### ❌ **Incorrect Code**

```javascript
import {
  ATable,
  AButton,
  ALink,
} from "aloha-vue";
```

***

### indent: 2, newline: true

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    indent: 2,
    newline: true,
  }]
}
```
#### ✅ **Correct Code**

```javascript
import {
  AButton,
  ALink,
  ATable,
} from "aloha-vue";
```

#### ❌ **Incorrect Code**

```javascript
import {
 AButton,
 ALink,
 ATable,
} from "aloha-vue";
```

```javascript
import {  AButton,  ALink,  ATable  } from "aloha-vue";
```

***

### indent: 1 newline: false

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    indent: 1,
    newline: false,
  }]
}
```
#### ✅ **Correct Code**

```javascript
import { AButton, ALink, ATable } from "aloha-vue";
```

#### ❌ **Incorrect Code**

```javascript
import {
 AButton,
 ALink,
 ATable,
} from "aloha-vue";
```

```javascript
import {  AButton,  ALink,  ATable  } from "aloha-vue";
```

***