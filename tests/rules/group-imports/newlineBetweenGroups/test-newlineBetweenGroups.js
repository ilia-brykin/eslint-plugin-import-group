import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  allNewline0Valid,
  allNewline1Valid,
  allNewline2Valid,
  allNewline3Valid,
} from "./valid-code-newlineBetweenGroups.js";
import {
  allNewline0Invalid,
  allNewline1Invalid,
  allNewline2Invalid,
  allNewline3Invalid,
} from "./invalid-code-newlineBetweenGroups.js";
import {
  optionsNewlineBetweenGroups0,
  optionsNewlineBetweenGroups1,
  optionsNewlineBetweenGroups2,
  optionsNewlineBetweenGroups3,
} from "./options-newlineBetweenGroups.js";

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
        options: optionsNewlineBetweenGroups0,
      },
      {
        code: allNewline1Valid,
        options: optionsNewlineBetweenGroups1,
      },
      {
        code: allNewline2Valid,
        options: optionsNewlineBetweenGroups2,
      },
      {
        code: allNewline3Valid,
        options: optionsNewlineBetweenGroups3,
      },
    ],

    invalid: [
      {
        code: allNewline0Invalid.code,
        output: allNewline0Invalid.output,
        errors: [{ messageId: allNewline0Invalid.messageId }],
        options: optionsNewlineBetweenGroups0,
      },
      {
        code: allNewline1Invalid.code,
        output: allNewline1Invalid.output,
        errors: [{ messageId: allNewline1Invalid.messageId }],
        options: optionsNewlineBetweenGroups1,
      },
      {
        code: allNewline2Invalid.code,
        output: allNewline2Invalid.output,
        errors: [{ messageId: allNewline2Invalid.messageId }],
        options: optionsNewlineBetweenGroups2,
      },
      {
        code: allNewline3Invalid.code,
        output: allNewline3Invalid.output,
        errors: [{ messageId: allNewline3Invalid.messageId }],
        options: optionsNewlineBetweenGroups3,
      },
    ],
  }
);

console.log("All tests passed!");