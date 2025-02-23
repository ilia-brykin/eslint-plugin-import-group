import {
  RuleTester,
} from "eslint";
import namedImports from "../../../../lib/rules/named-imports.js"
import {
  optionsSortAsc,
  optionsSortDesc,
  optionsSortNone,
} from "./options-sort.js";
import {
  sortAscValid,
  sortDescValid,
  sortNoneValid,
} from "./valid-code-sort.js";
import {
  sortAscInvalid,
  sortDescInvalid,
  sortNoneInvalid,
} from "./invalid-code-sort.js";

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "named-imports",
  namedImports,
  {
    valid: [
      {
        code: sortAscValid,
        options: optionsSortAsc,
      },
      {
        code: sortDescValid,
        options: optionsSortDesc,
      },
      {
        code: sortNoneValid,
        options: optionsSortNone,
      },
    ],
    invalid: [
      {
        code: sortAscInvalid.code,
        output: sortAscInvalid.output,
        errors: [{ messageId: sortAscInvalid.messageId }],
        options: optionsSortAsc,
      },
      {
        code: sortDescInvalid.code,
        output: sortDescInvalid.output,
        errors: [{ messageId: sortDescInvalid.messageId }],
        options: optionsSortDesc,
      },
      {
        code: sortNoneInvalid.code,
        output: sortNoneInvalid.output,
        errors: [{ messageId: sortNoneInvalid.messageId }],
        options: optionsSortNone,
      },
    ],
  }
);

console.log("All tests 'sort' passed!");