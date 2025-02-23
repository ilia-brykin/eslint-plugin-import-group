import {
  RuleTester,
} from "eslint";
import namedImports from "../../../../lib/rules/named-imports.js"
import {
  vueValid,
  vueAlohaAndComponentsValid,
  vueAlohaComponentsAndRestValid,
} from "./valid-code-basic.js";
import {
  vueInvalid1,
  vueInvalid2,
  vueOneImportInvalid,
} from "./invalid-code-basic.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

console.log("<< named-imports >>");
ruleTester.run(
  "named-imports",
  namedImports,
  {
    valid: [
      {
        code: vueValid,
      },
      {
        code: vueAlohaAndComponentsValid,
      },
      {
        code: vueAlohaComponentsAndRestValid,
      },
    ],
    invalid: [
      {
        code: vueInvalid1.code,
        output: vueInvalid1.output,
        errors: [{ messageId: vueInvalid1.messageId }],
      },
      {
        code: vueInvalid2.code,
        output: vueInvalid2.output,
        errors: [{ messageId: vueInvalid2.messageId }],
      },
      {
        code: vueOneImportInvalid.code,
        output: vueOneImportInvalid.output,
        errors: [{ messageId: vueOneImportInvalid.messageId }],
      },
    ],
  }
);

console.log("All tests 'basic' passed!");