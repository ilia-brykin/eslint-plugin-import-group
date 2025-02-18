import groupImports from "./rules/group-imports.js";
import namedImports from "./rules/named-imports.js";

export default {
  meta: {
    name: "eslint-plugin-import-group",
    version: "1.1.1",
  },
  rules: {
    "group-imports": groupImports,
    "named-imports": namedImports,
  },
};
