import groupImports from "./lib/rules/group-imports.js";
import namedImports from "./lib/rules/named-imports.js";

export default {
  meta: {
    name: "eslint-plugin-import-group",
    version: "1.0.1",
  },
  rules: {
    "group-imports": groupImports,
    "named-imports": namedImports,
  },
};