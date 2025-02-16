import {
  getImportNodes,
  getImportTexts,
} from "../utils/utils.js";
import {
  forEach,
  isEmpty,
  orderBy,
  remove,
  uniqueId,
} from "lodash-es";

const REST_ID = "_rest_";

function addUniqIdForSubGroups({ groups }) {
  forEach(groups, group => {
    forEach(group.patterns, subGroup => {
      if (subGroup.exact === "_rest_") {
        subGroup.id = REST_ID;
      } else {
        subGroup.id = uniqueId("sub_group_");
      }
    });
  });

  return groups;
}

function getImportTextsWithEmptyLines({ importNodes, sourceCode }) {
  const fullText = sourceCode.getText();
  const lines = fullText.split("\n");

  const importTexts = [];
  let lastImportLine = 0;

  importNodes.forEach((node, index) => {
    const importText = sourceCode.getText(node);
    const currentImportLine = node.loc.start.line - 1;

    if (index > 0) {
      for (let i = lastImportLine + 1; i < currentImportLine; i++) {
        if (lines[i].trim() === "") {
          importTexts.push("");
        }
      }
    }

    importTexts.push(importText);
    lastImportLine = node.loc.end.line - 1;
  });

  return importTexts;
}

function matchesPattern(importStatement, patternObj) {
  const importPathMatch = importStatement.match(/from\s+['"](.*?)['"];/);
  if (!importPathMatch) {
    return false;
  }

  const importPath = importPathMatch[1];

  if (patternObj.exact) {
    return importPath === patternObj.exact;
  }
  if (patternObj.regex) {
    return new RegExp(patternObj.regex).test(importPath);
  }
  return false;
}

function groupImports({ importTexts, groups }) {
  const remainingImports = [...importTexts];
  const groupedImports = {};

  forEach(groups, group => {
    forEach(group.patterns, item => {
      if (item.exact === "_rest_") {
        return;
      }

      let patternMatchedImports = remove(remainingImports, imp => matchesPattern(imp, item));
      if (item.sort) {
        patternMatchedImports = orderBy(patternMatchedImports, undefined, item.sort);
      }
      groupedImports[item.id] = patternMatchedImports;
    });
  });

  // Ensure any remaining imports are still included
  if (!isEmpty(remainingImports)) {
    groupedImports[REST_ID] = remainingImports;
  }

  return groupedImports;
}

function sortImports({ groupedImports, groups, newlineBetweenGroups }) {
  const sortedImports = [];
  forEach(groups, group => {
    let importsForGroup = [];
    forEach(group.patterns, item => {
      const {
        id,
      } = item;
      if (groupedImports[id]) {
        importsForGroup.push(...groupedImports[id]);
      }
    });
    if (!importsForGroup.length) {
      return;
    }

    if (group.sort) {
      importsForGroup = orderBy(importsForGroup, undefined, group.sort);
    }

    if (newlineBetweenGroups && sortedImports.length) {
      sortedImports.push(...Array(newlineBetweenGroups).fill(""));
    }
    sortedImports.push(...importsForGroup);
  });

  return sortedImports;
}


function reportIncorrectOrder(context, importNodes, fixedCode) {
  context.report({
    node: importNodes[0],
    messageId: "incorrectOrder",
    fix(fixer) {
      return fixer.replaceTextRange(
        [importNodes[0].range[0], importNodes[importNodes.length - 1].range[1]],
        fixedCode,
      );
    },
  });
}


export default {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce import grouping with custom order",
      recommended: false,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          groups: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                patterns: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      exact: { type: "string" },
                      regex: { type: "string" },
                      sort: { type: "string", enum: ["asc", "desc"] },
                    },
                  },
                },
                sort: { type: "string", enum: ["asc", "desc"] },
              },
            },
          },
          newlineBetweenGroups: {
            type: "integer",
            minimum: 0,
            maximum: 5,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      incorrectOrder: "Imports should be grouped correctly.",
    },
  },
  create(context) {
    const OPTIONS = context.options[0] || {};
    let groups = OPTIONS.groups || [];
    const newlineBetweenGroups = OPTIONS.newlineBetweenGroups || 0;

    // Ensure there is a _rest_ group at the end if it's missing
    if (!groups.some(group => group.patterns.some(pattern => pattern.exact === "_rest_"))) {
      groups.push({
        name: "Uncategorized Imports",
        patterns: [{ exact: "_rest_" }],
        sort: "desc", // Default sorting for _rest_ group
      });
    }

    groups = addUniqIdForSubGroups({ groups });

    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const importNodes = getImportNodes({ node });

        if (importNodes.length < 2) {
          return;
        }

        const importTexts = getImportTexts({ importNodes, sourceCode });
        const groupedImports = groupImports({ importTexts, groups });
        const sortedImports = sortImports({ groupedImports, groups, newlineBetweenGroups });

        const importTextsWithEmptyLines = getImportTextsWithEmptyLines({ importNodes, sourceCode });
        const importCode = importTextsWithEmptyLines.join("\n");
        const fixedCode = sortedImports.join("\n");
        // debugStringDiff(importCodeNormalize, fixedCodeNormalize);
        if (importCode !== fixedCode) {
          reportIncorrectOrder(context, importNodes, fixedCode);
        }
      },
    };
  },
};
