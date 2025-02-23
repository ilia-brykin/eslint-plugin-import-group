import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  allNewline0Valid,
  allNewline1Valid,
  allNewline2Valid,
  allNewline3Valid,
} from "./valid-code-emptyLinesBetweenGroups.js";
import {
  allNewline0Invalid,
  allNewline1Invalid,
  allNewline2Invalid,
  allNewline3Invalid,
} from "./invalid-code-emptyLinesBetweenGroups.js";
import {
  optionsEmptyLinesBetweenGroups0,
  optionsEmptyLinesBetweenGroups1,
  optionsEmptyLinesBetweenGroups2,
  optionsEmptyLinesBetweenGroups3,
} from "./options-emptyLinesBetweenGroups.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "group-imports",
  groupImports,
  {
    valid: [
      {
        code: allNewline0Valid,
        options: optionsEmptyLinesBetweenGroups0,
      },
      {
        code: allNewline1Valid,
        options: optionsEmptyLinesBetweenGroups1,
      },
      {
        code: allNewline2Valid,
        options: optionsEmptyLinesBetweenGroups2,
      },
      {
        code: allNewline3Valid,
        options: optionsEmptyLinesBetweenGroups3,
      },
    ],

    invalid: [
      {
        code: allNewline0Invalid.code,
        output: allNewline0Invalid.output,
        errors: [{ messageId: allNewline0Invalid.messageId }],
        options: optionsEmptyLinesBetweenGroups0,
      },
      {
        code: allNewline1Invalid.code,
        output: allNewline1Invalid.output,
        errors: [{ messageId: allNewline1Invalid.messageId }],
        options: optionsEmptyLinesBetweenGroups1,
      },
      {
        code: allNewline2Invalid.code,
        output: allNewline2Invalid.output,
        errors: [{ messageId: allNewline2Invalid.messageId }],
        options: optionsEmptyLinesBetweenGroups2,
      },
      {
        code: allNewline3Invalid.code,
        output: allNewline3Invalid.output,
        errors: [{ messageId: allNewline3Invalid.messageId }],
        options: optionsEmptyLinesBetweenGroups3,
      },
    ],
  }
);

console.log("All tests passed!");