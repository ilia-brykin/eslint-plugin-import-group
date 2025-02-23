import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  lines2Components3RestValid,
  lines2ComponentsValid,
} from "./valid-code-emptyLinesBeforeGroup.js";
import {
  lines2Components3RestInvalid,
  lines2ComponentsInvalid,
} from "./invalid-code-emptyLinesBeforeGroup.js";
import {
  optionsLines2Components3Rest,
  optionsLines2Components,
} from "./options-emptyLinesBeforeGroup.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "group-imports",
  groupImports,
  {
    valid: [
      {
        code: lines2Components3RestValid,
        options: optionsLines2Components3Rest,
      },
      {
        code: lines2ComponentsValid,
        options: optionsLines2Components,
      },
    ],

    invalid: [
      {
        code: lines2Components3RestInvalid.code,
        output: lines2Components3RestInvalid.output,
        errors: [{ messageId: lines2Components3RestInvalid.messageId }],
        options: optionsLines2Components3Rest,
      },
      {
        code: lines2ComponentsInvalid.code,
        output: lines2ComponentsInvalid.output,
        errors: [{ messageId: lines2ComponentsInvalid.messageId }],
        options: optionsLines2Components,
      },
    ],
  }
);

console.log("All tests 'emptyLinesBeforeGroup' passed!");