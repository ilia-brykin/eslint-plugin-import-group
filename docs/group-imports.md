# group-imports

## Details
The **group-imports** rule enforces a specific grouping and ordering of your import statements. It lets you define custom groups based on patterns (exact match, regular expressions, or substring inclusion) and control how imports within each group are sorted. Additionally, you can configure the number of blank lines between groups and choose whether to preserve any non-import code that may appear among your import declarations.

***

## Options

- `groups` (`array`, `required`): An array of group objects that define how imports should be classified and ordered. Each group object may include:
  - `name` (`string`): A descriptive name for the group (e.g., "Core Imports", "Components").
  - `patterns` (`array`, `required`): An array of pattern objects. Each pattern object determines whether an import belongs to this group based on its import path. A pattern object can have:
    - `exact` (`string`): Matches imports whose module path is **exactly equal** to the specified value. **Example**: `{ exact: "vue" }` matches only the module `vue`.
    - `regex` (`string`): A **regular expression** (as a string) to test against the module path. Example: `{ regex: ".vue$" }` matches any import that ends with `.vue`.
    - `includes` (`string`): Matches if the module path **contains the given substring**. Example: `{ includes: "directives" }` matches any import path containing `directives`.
    - `sort` (`string`): Overrides the **group-level sorting** for imports that match this pattern. Acceptable values are `"asc"` (ascending) or `"desc"` (descending).
    - Note: The special pattern `{ exact: "_rest_" }` is reserved for **unmatched** imports. If no group explicitly defines a `_rest_` pattern, one will be **automatically added** as a group called **"Uncategorized Imports"**.
  - `sort` (`string`): Specifies the **sorting order for all imports in the group** (if not overridden on individual patterns). Allowed values are `"asc"` or `"desc"`.
  - `emptyLinesBeforeGroup` (`integer`): If specified, it overrides the global `emptyLinesBetweenGroups` setting (see below) for this group by inserting the defined number of **blank lines before the group** (except for the first group).
- `emptyLinesBetweenGroups` (`integer`): The default number of **empty lines** to insert between groups if a group does not define its own `emptyLinesBeforeGroup`. Valid values are between `0` and `5` (inclusive). Example: Setting `"emptyLinesBetweenGroups": 1` will insert one blank line between each group.
- `preserveNonImportCode` (`boolean`): When set to `true`, any **non-import code** that appears between the first and last import declaration is preserved and appended **after the sorted imports**. If set to `false` (the default), **only the import declarations** are re-ordered and any **other code is removed** from the import block.
***

## Usage

To enable the **group-imports** rule, add it to the ESLint configuration under the `rules` section of your project’s ESLint config file. Ensure that the `eslint-plugin-import-group` plugin is installed and referenced correctly. The rule can be configured by providing a custom array of groups that define how imports should be classified and ordered.

This rule supports ESLint’s `--fix` flag, which will automatically reorder and group import statements according to your configuration. To prevent conflicts, disable any overlapping rules (such as `import/order`) in your ESLint settings.
***

## Examples

### Basic

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "vue-router",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            regex: ".vue$",
          },
        ],
        sort: "asc",
      },
      {
        name: "Third-Party Libraries",
        patterns: [
          {
            exact: "_rest_",
            sort: "asc",
          },
          {
            exact: "lodash-es",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 1,
  }]
}
```
#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import {
  useRouter,
} from "vue-router";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
```

#### ❌ **Incorrect Code**

```javascript
import Foo from "@/components/Foo.vue";
import {
  useRouter,
} from "vue-router";
import {
  AButton,
  ALink,
} from "aloha-vue";
import {
  ref,
  computed,
} from "vue";
import Bar from "@/components/Bar.vue";
```

***

### emptyLinesBetweenGroups

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "vue-router",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            regex: ".vue$",
          },
        ],
      },
      {
        name: "Rest",
        patterns: [
          {
            exact: "_rest_",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 0,
  }]
}
```

#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

#### ❌ **Incorrect Code**

```javascript
import {
  ref,
  computed,
} from "vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

***

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "vue-router",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            regex: ".vue$",
          },
        ],
      },
      {
        name: "Rest",
        patterns: [
          {
            exact: "_rest_",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 1,
  }]
}
```

#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

#### ❌ **Incorrect Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

***

### emptyLinesBeforeGroup

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "vue-router",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            regex: ".vue$",
          },
        ],
        emptyLinesBeforeGroup: 2,
      },
      {
        name: "Rest",
        patterns: [
          {
            exact: "_rest_",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 1,
  }]
}
```

#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";


import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

#### ❌ **Incorrect Code**

```javascript
import {
  ref,
  computed,
} from "vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
```

***

### sort

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            includes: ".vue",
          },
        ],
        sort: "asc",
      },
      {
        name: "Directives",
        patterns: [
          {
            includes: "directives",
          },
        ],
        sort: "asc",
      },
      {
        name: "Third-Party Libraries",
        patterns: [
          {
            exact: "_rest_",
            sort: "asc",
          },
          {
            exact: "lodash-es",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 1,
  }]
}
```

#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Aloha from "@/components/aloha.vue";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import Directive1 from "@/directives/directive1";
import Directive2 from "@/directives/directive2";

import axios from "axios";
import moment from "moment";
import {getText} from "utils";
import {forEach} from "lodash-es";
```

#### ❌ **Incorrect Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
import Aloha from "@/components/aloha.vue";

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import axios from "axios";
import moment from "moment";
import {getText} from "utils";
import {forEach} from "lodash-es";
```

***

### preserveNonImportCode

#### Configuration

```javascript
{
  "group-imports/group-imports": ["error", {
    groups: [
      {
        name: "Core Imports",
        patterns: [
          {
            exact: "vue",
          },
          {
            exact: "aloha-vue",
          },
        ],
      },
      {
        name: "Components",
        patterns: [
          {
            includes: ".vue",
          },
        ],
      },
      {
        name: "Directives",
        patterns: [
          {
            includes: "directives",
          },
        ],
      },
      {
        name: "Third-Party Libraries",
        patterns: [
          {
            exact: "_rest_",
          },
          {
            exact: "lodash-es",
          },
        ],
      },
    ],
    emptyLinesBetweenGroups: 1,
    preserveNonImportCode: true,
  }]
}
```

#### ✅ **Correct Code**

```javascript
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Bar from "@/components/Bar.vue";
import Aloha from "@/components/aloha.vue";
import Foo from "@/components/Foo.vue";

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";

// Aloha
console.log("Aloha");
```

#### ❌ **Incorrect Code**

```javascript
import {
  ref,
  computed,
} from "vue";
// Aloha
import {
  AButton,
  ALink,
} from "aloha-vue";
console.log("Aloha");

import Bar from "@/components/Bar.vue";
import Aloha from "@/components/aloha.vue";
import Foo from "@/components/Foo.vue";

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";
```

***