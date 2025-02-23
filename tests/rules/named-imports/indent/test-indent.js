import {
  RuleTester,
} from "eslint";
import namedImports from "../../../../lib/rules/named-imports.js"
import {
  optionsNewlineTrueIndent0,
  optionsNewlineTrueIndent1,
  optionsNewlineTrueIndent2,
  optionsNewlineTrueIndent4,
  optionsNewlineFalseIndent0,
  optionsNewlineFalseIndent1,
  optionsNewlineFalseIndent2,
} from "./options-indent.js";
import {
  newlineTrueIndent0Valid,
  newlineTrueIndent1Valid,
  newlineTrueIndent2Valid,
  newlineTrueIndent4Valid,
  newlineFalseIndent0Valid,
  newlineFalseIndent1Valid,
  newlineFalseIndent2Valid,
} from "./valid-code-indent.js";
import {
  newlineTrueIndent0Invalid,
  newlineTrueIndent1Invalid,
  newlineTrueIndent2Invalid,
  newlineTrueIndent4Invalid,
  newlineFalseIndent0Invalid,
  newlineFalseIndent1Invalid,
  newlineFalseIndent2Invalid,
} from "./invalid-code-indent.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "named-imports",
  namedImports,
  {
    valid: [
      {
        code: newlineTrueIndent0Valid,
        options: optionsNewlineTrueIndent0,
      },
      {
        code: newlineTrueIndent1Valid,
        options: optionsNewlineTrueIndent1,
      },
      {
        code: newlineTrueIndent2Valid,
        options: optionsNewlineTrueIndent2,
      },
      {
        code: newlineTrueIndent4Valid,
        options: optionsNewlineTrueIndent4,
      },
      {
        code: newlineFalseIndent0Valid,
        options: optionsNewlineFalseIndent0,
      },
      {
        code: newlineFalseIndent1Valid,
        options: optionsNewlineFalseIndent1,
      },
      {
        code: newlineFalseIndent2Valid,
        options: optionsNewlineFalseIndent2,
      },
    ],
    invalid: [
      {
        code: newlineTrueIndent0Invalid.code,
        output: newlineTrueIndent0Invalid.output,
        errors: [{ messageId: newlineTrueIndent0Invalid.messageId }],
        options: optionsNewlineTrueIndent0,
      },
      {
        code: newlineTrueIndent1Invalid.code,
        output: newlineTrueIndent1Invalid.output,
        errors: [{ messageId: newlineTrueIndent1Invalid.messageId }],
        options: optionsNewlineTrueIndent1,
      },
      {
        code: newlineTrueIndent2Invalid.code,
        output: newlineTrueIndent2Invalid.output,
        errors: [{ messageId: newlineTrueIndent2Invalid.messageId }],
        options: optionsNewlineTrueIndent2,
      },
      {
        code: newlineTrueIndent4Invalid.code,
        output: newlineTrueIndent4Invalid.output,
        errors: [{ messageId: newlineTrueIndent4Invalid.messageId }],
        options: optionsNewlineTrueIndent4,
      },
      {
        code: newlineFalseIndent0Invalid.code,
        output: newlineFalseIndent0Invalid.output,
        errors: [{ messageId: newlineFalseIndent0Invalid.messageId }],
        options: optionsNewlineFalseIndent0,
      },
      {
        code: newlineFalseIndent1Invalid.code,
        output: newlineFalseIndent1Invalid.output,
        errors: [{ messageId: newlineFalseIndent1Invalid.messageId }],
        options: optionsNewlineFalseIndent1,
      },
      {
        code: newlineFalseIndent2Invalid.code,
        output: newlineFalseIndent2Invalid.output,
        errors: [{ messageId: newlineFalseIndent2Invalid.messageId }],
        options: optionsNewlineFalseIndent2,
      },
    ],
  }
);

console.log("All tests 'indent' passed!");