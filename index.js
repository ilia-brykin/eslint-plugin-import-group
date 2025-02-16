import groupImports from "./lib/rules/group-imports";
import namedImports from "./lib/rules/named-imports";

export default {
  meta: {
    name: "eslint-plugin-import-group",
    version: "1.0.0",
  },
  rules: {
    "group-imports": groupImports,
    "named-imports": namedImports,
  },
};