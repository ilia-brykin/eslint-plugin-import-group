import {
  getImportNodes,
  normalizeString,
} from "../utils/utils.js";
import {
  forEach,
  isUndefined,
  orderBy,
} from "lodash-es";

function sortNamedImports({ importText, sortOrder, newline, indentSpaces }) {
  return importText.replace(/{([^}]*)}/g, (match, contents) => {
    let names = contents
      .split(",")
      .map(name => name.trim())
      .filter(Boolean);

    if (sortOrder !== "none") {
      names = orderBy(names, [name => name.toLowerCase()], [sortOrder]);
    }

    if (newline) {
      return `{
${ indentSpaces }${ names.join(`,\n${ indentSpaces }`) },
}`;
    }
    return `{${ indentSpaces }${ names.join(`,${ indentSpaces }`) }${ indentSpaces }}`;
  });
}

export default {
  meta: {
    type: "layout",
    docs: {
      description: "Sort named imports alphabetically and format with new lines",
      recommended: false,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          sort: {
            type: "string",
            enum: ["asc", "desc", "none"],
            default: "asc",
          },
          newline: {
            type: "boolean",
            default: true,
          },
          indent: {
            type: "integer",
            default: 2,
            minimum: 0,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      asc_newline_true: "Named imports should be sorted in ascending order and each item should be on a new line.",
      desc_newline_true: "Named imports should be sorted in descending order and each item should be on a new line.",
      none_newline_true: "Named imports can not be sorted, but each item should be on a new line.",
      asc_newline_false: "Named imports should be sorted in ascending order and kept in a single line.",
      desc_newline_false: "Named imports should be sorted in descending order and kept in a single line.",
      none_newline_false: "Named imports can not be sorted and kept in a single line.",
    },
  },
  create(context) {
    const options = context.options[0] || {};
    const sortOrder = options.sort || "asc";
    const newline = options.newline !== false;
    let indent = options.indent;
    if (isUndefined(indent)) {
      indent = newline ?
        2 :
        1;
    }
    const indentSpaces = " ".repeat(indent);
    const messageKey = `${ sortOrder }_newline_${ newline }`;

    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const importNodes = getImportNodes({ node });

        forEach(importNodes, importNode => {
          const importText = sourceCode.getText(importNode);
          if (importText.includes("{") && importText.includes("}")) {
            const fixedText = sortNamedImports({ importText, sortOrder, newline, indentSpaces });
            if (normalizeString(importText) !== normalizeString(fixedText)) {
              context.report({
                node: importNode,
                messageId: messageKey,
                fix(fixer) {
                  return fixer.replaceText(importNode, fixedText);
                },
              });
            }
          }
        });
      },
    };
  },
};
