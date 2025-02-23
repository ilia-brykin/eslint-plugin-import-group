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
  optionsemptyLinesBetweenGroups0,
  optionsemptyLinesBetweenGroups1,
  optionsemptyLinesBetweenGroups2,
  optionsemptyLinesBetweenGroups3,
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
        options: optionsemptyLinesBetweenGroups0,
      },
      {
        code: allNewline1Valid,
        options: optionsemptyLinesBetweenGroups1,
      },
      {
        code: allNewline2Valid,
        options: optionsemptyLinesBetweenGroups2,
      },
      {
        code: allNewline3Valid,
        options: optionsemptyLinesBetweenGroups3,
      },
    ],

    invalid: [
      {
        code: allNewline0Invalid.code,
        output: allNewline0Invalid.output,
        errors: [{ messageId: allNewline0Invalid.messageId }],
        options: optionsemptyLinesBetweenGroups0,
      },
      {
        code: allNewline1Invalid.code,
        output: allNewline1Invalid.output,
        errors: [{ messageId: allNewline1Invalid.messageId }],
        options: optionsemptyLinesBetweenGroups1,
      },
      {
        code: allNewline2Invalid.code,
        output: allNewline2Invalid.output,
        errors: [{ messageId: allNewline2Invalid.messageId }],
        options: optionsemptyLinesBetweenGroups2,
      },
      {
        code: allNewline3Invalid.code,
        output: allNewline3Invalid.output,
        errors: [{ messageId: allNewline3Invalid.messageId }],
        options: optionsemptyLinesBetweenGroups3,
      },
    ],
  }
);

console.log("All tests passed!");