import {
  RuleTester,
} from "eslint";
import groupImports from "../../../../lib/rules/group-imports.js"
import {
  vueComponentsDirectivesAndRestAscValid,
  vueComponentsDirectivesAndRestDescValid,
} from "./valid-code-sort.js";
import {
  vueComponentsDirectivesAndRestAscInvalid,
  vueComponentsDirectivesAndRestDescInvalid,
} from "./invalid-code-sort.js";
import {
  optionsSortAsc,
  optionsSortDesc,
} from "./options-sort.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "group-imports",
  groupImports,
  {
    valid: [
      {
        code: vueComponentsDirectivesAndRestAscValid,
        options: optionsSortAsc,
      },
      {
        code: vueComponentsDirectivesAndRestDescValid,
        options: optionsSortDesc,
      },
    ],
    invalid: [
      {
        code: vueComponentsDirectivesAndRestAscInvalid.code,
        output: vueComponentsDirectivesAndRestAscInvalid.output,
        errors: [{ messageId: vueComponentsDirectivesAndRestAscInvalid.messageId }],
        options: optionsSortAsc,
      },
      {
        code: vueComponentsDirectivesAndRestDescInvalid.code,
        output: vueComponentsDirectivesAndRestDescInvalid.output,
        errors: [{ messageId: vueComponentsDirectivesAndRestDescInvalid.messageId }],
        options: optionsSortDesc,
      },
    ],
  }
);

console.log("All tests 'sort' passed!");