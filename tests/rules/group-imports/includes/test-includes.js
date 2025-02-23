import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  componentsAndRestValid,
  vueAndComponentsValid,
  vueAlohaAndComponentsValid,
  vueAlohaComponentsAndRestValid,
} from "./valid-code-includes.js";
import {
  componentsAndRestInvalid,
  vueAndComponentsInvalid,
  vueAlohaComponentsAndRestInvalid,
} from "./invalid-code-includes.js";
import {
  optionsIncludes,
} from "./options-includes.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "group-imports",
  groupImports,
  {
    valid: [
      {
        code: componentsAndRestValid,
        options: optionsIncludes,
      },
      {
        code: vueAndComponentsValid,
        options: optionsIncludes,
      },
      {
        code: vueAlohaAndComponentsValid,
        options: optionsIncludes,
      },
      {
        code: vueAlohaComponentsAndRestValid,
        options: optionsIncludes,
      },
    ],
    invalid: [
      {
        code: componentsAndRestInvalid.code,
        output: componentsAndRestInvalid.output,
        errors: [{ messageId: componentsAndRestInvalid.messageId }],
        options: optionsIncludes,
      },
      {
        code: vueAndComponentsInvalid.code,
        output: vueAndComponentsInvalid.output,
        errors: [{ messageId: vueAndComponentsInvalid.messageId }],
        options: optionsIncludes,
      },
      {
        code: vueAlohaComponentsAndRestInvalid.code,
        output: vueAlohaComponentsAndRestInvalid.output,
        errors: [{ messageId: vueAlohaComponentsAndRestInvalid.messageId }],
        options: optionsIncludes,
      },
    ],
  }
);

console.log("All tests 'includes' passed!");