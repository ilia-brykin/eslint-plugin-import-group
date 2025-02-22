import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  onlyComponentsValid,
  vueAndComponentsValid,
  vueAlohaAndComponentsValid,
  vueAlohaComponentsAndRestValid,
} from "./valid-code.js";
import {
  onlyComponentsInvalid,
  vueAndComponentsInvalid,
  vueAlohaAndComponentsInvalid,
} from "./Invalid-code.js";
import {
  options,
} from "./options.js";

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
        options: options,
      },
      {
        code: vueAndComponentsValid,
        options: options,
      },
      {
        code: vueAlohaAndComponentsValid,
        options: options,
      },
      {
        code: vueAlohaComponentsAndRestValid,
        options: options,
      },
    ],

    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: onlyComponentsInvalid.code,
        output: onlyComponentsInvalid.output,
        errors: [{ messageId: onlyComponentsInvalid.messageId }],
        options: options,
      },
      {
        code: vueAndComponentsInvalid.code,
        output: vueAndComponentsInvalid.output,
        errors: [{ messageId: vueAndComponentsInvalid.messageId }],
        options: options,
      },
      {
        code: vueAlohaAndComponentsInvalid.code,
        output: vueAlohaAndComponentsInvalid.output,
        errors: [{ messageId: vueAlohaAndComponentsInvalid.messageId }],
        options: options,
      },
    ],
  }
);

console.log("All tests passed!");