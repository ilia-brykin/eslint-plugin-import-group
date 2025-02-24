import groupImports from "./rules/group-imports.js";
import namedImports from "./rules/named-imports.js";

export default {
  meta: {
    name: "eslint-plugin-import-group",
    version: "2.0.2",
  },
  rules: {
    "group-imports": groupImports,
    "named-imports": namedImports,
  },
};
