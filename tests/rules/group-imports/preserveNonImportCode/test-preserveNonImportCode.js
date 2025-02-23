import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  vueComponentsDirectivesAndRestValid,
} from "./valid-code-preserveNonImportCode.js";
import {
  preserveNonImportCodeTrueInvalid,
  preserveNonImportCodeTrue2Invalid,
  preserveNonImportCodeFalseInvalid,
} from "./invalid-code-preserveNonImportCode.js";
import {
  optionsPreserveNonImportCodeTrue,
  optionsPreserveNonImportCodeFalse,
} from "./options-preserveNonImportCode.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "group-imports",
  groupImports,
  {
    valid: [
      {
        code: vueComponentsDirectivesAndRestValid,
        options: optionsPreserveNonImportCodeTrue,
      },
    ],
    invalid: [
      {
        code: preserveNonImportCodeTrueInvalid.code,
        output: preserveNonImportCodeTrueInvalid.output,
        errors: [{ messageId: preserveNonImportCodeTrueInvalid.messageId }],
        options: optionsPreserveNonImportCodeTrue,
      },
      {
        code: preserveNonImportCodeTrue2Invalid.code,
        output: preserveNonImportCodeTrue2Invalid.output,
        errors: [{ messageId: preserveNonImportCodeTrue2Invalid.messageId }],
        options: optionsPreserveNonImportCodeTrue,
      },
      {
        code: preserveNonImportCodeFalseInvalid.code,
        output: preserveNonImportCodeFalseInvalid.output,
        errors: [{ messageId: preserveNonImportCodeFalseInvalid.messageId }],
        options: optionsPreserveNonImportCodeFalse,
      },
    ],
  }
);

console.log("All tests 'preserveNonImportCode' passed!");