import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  onlyComponentsValid,
  vueAndComponentsValid,
  vueAlohaAndComponentsValid,
  vueAlohaComponentsAndRestValid,
} from "./valid-code-basic.js";
import {
  onlyComponentsInvalid,
  vueAndComponentsInvalid,
  vueAlohaAndComponentsInvalid,
} from "./invalid-code-basic.js";
import {
  optionsBasic,
} from "./options-basic.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "group-imports", // rule name
  groupImports, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: onlyComponentsValid,
        options: optionsBasic,
      },
      {
        code: vueAndComponentsValid,
        options: optionsBasic,
      },
      {
        code: vueAlohaAndComponentsValid,
        options: optionsBasic,
      },
      {
        code: vueAlohaComponentsAndRestValid,
        options: optionsBasic,
      },
    ],

    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: onlyComponentsInvalid.code,
        output: onlyComponentsInvalid.output,
        errors: [{ messageId: onlyComponentsInvalid.messageId }],
        options: optionsBasic,
      },
      {
        code: vueAndComponentsInvalid.code,
        output: vueAndComponentsInvalid.output,
        errors: [{ messageId: vueAndComponentsInvalid.messageId }],
        options: optionsBasic,
      },
      {
        code: vueAlohaAndComponentsInvalid.code,
        output: vueAlohaAndComponentsInvalid.output,
        errors: [{ messageId: vueAlohaAndComponentsInvalid.messageId }],
        options: optionsBasic,
      },
    ],
  }
);

console.log("All tests 'basic' passed!");