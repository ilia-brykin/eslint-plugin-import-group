import {
  getImportNodes,
  getImportTexts,
  removeExtraNewlines,
} from "../utils/utils.js";
import {
  forEach,
  isEmpty, isUndefined,
  orderBy,
  remove,
  uniqueId,
} from "lodash-es";

const REST_ID = "_rest_";

function addUniqIdForSubGroups({ groups }) {
  return groups.map(group => ({
    ...group,
    patterns: group.patterns.map(subGroup => ({
      ...subGroup,
      id: subGroup.exact === "_rest_" ? REST_ID : uniqueId("sub_group_"),
    })),
  }));
}

export function getImportBlockNodes({ node, preserveNonImportCode }) {
  const NODES = {
    importNodes: [],
    anotherNodesBetweenImports: [],
  };
  if (preserveNonImportCode) {
    let hasImport = false;
    let anotherNodesBetweenImportsTemp = [];
    node.body.forEach(n => {
      if (n.type === "ImportDeclaration") {
        hasImport = true;
        NODES.importNodes.push(n);
        if (anotherNodesBetweenImportsTemp.length) {
          NODES.anotherNodesBetweenImports.push(...anotherNodesBetweenImportsTemp);
          anotherNodesBetweenImportsTemp = [];
        }
      } else if (hasImport) {
        anotherNodesBetweenImportsTemp.push(n);
      }
    })
  } else {
    NODES.importNodes = node.body.filter(n => n.type === "ImportDeclaration");
  }

  return NODES;
}

function getTextFromFirstToLastImports({ importNodes, sourceCode }) {
  const firstImport = importNodes[0];
  const lastImport = importNodes[importNodes.length - 1];
  const fullText = sourceCode.getText();

  return fullText.slice(firstImport.range[0], lastImport.range[1]).trim();
}

function getTextBetweenImports({ importNodes, sourceCode }) {
  const fullText = sourceCode.getText();
  let text = "";
  let lastIndex = -1;
  importNodes.forEach((node) => {
    if (lastIndex !== -1) {
      if (node.range[0] > lastIndex) {
        text += fullText.slice(lastIndex, node.range[0]);
      }
    }
    lastIndex = node.range[1] + 1;
  });

  return removeExtraNewlines(text);
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
  if (patternObj.includes) {
    return importPath.includes(patternObj.includes);
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

function sortImports({ groupedImports, groups, emptyLinesBetweenGroups }) {
  const sortedImports = [];
  forEach(groups, group => {
    let importsForGroup = [];
    forEach(group.patterns, item => {
      const {
        id,
      } = item;
      if (groupedImports[id]) {
        if (id === REST_ID && item.sort) {
          importsForGroup.push(...orderBy(groupedImports[id], undefined, item.sort));
        } else {
          importsForGroup.push(...groupedImports[id]);
        }

      }
    });
    if (!importsForGroup.length) {
      return;
    }

    if (group.sort) {
      importsForGroup = orderBy(importsForGroup, undefined, group.sort);
    }

    if (sortedImports.length) {
      const countEmptyLines = isUndefined(group.emptyLinesBeforeGroup) ?
        emptyLinesBetweenGroups :
        group.emptyLinesBeforeGroup;
      if (countEmptyLines) {
        sortedImports.push(...Array(countEmptyLines).fill(""));
      }
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
                      includes: { type: "string" },
                      exact: { type: "string" },
                      regex: { type: "string" },
                      sort: { type: "string", enum: ["asc", "desc"] },
                    },
                  },
                },
                sort: { type: "string", enum: ["asc", "desc"] },
                emptyLinesBeforeGroup: {
                  type: "integer",
                  minimum: 0,
                  maximum: 5,
                },
              },
            },
          },
          emptyLinesBetweenGroups: {
            type: "integer",
            minimum: 0,
            maximum: 5,
          },
          preserveNonImportCode: {
            type: "boolean",
            default: true,
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

    let groups = OPTIONS.groups ? [...OPTIONS.groups] : [];
    const emptyLinesBetweenGroups = OPTIONS.emptyLinesBetweenGroups || 0;
    const preserveNonImportCode = OPTIONS.preserveNonImportCode;

    // Ensure there is a _rest_ group at the end if it's missing
    if (!groups.some(group => group.patterns.some(pattern => pattern.exact === "_rest_"))) {
      groups.push({
        name: "Uncategorized Imports",
        patterns: [{ exact: "_rest_" }],
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
        const sortedImports = sortImports({ groupedImports, groups, emptyLinesBetweenGroups });

        const textBetweenImports = getTextFromFirstToLastImports({ importNodes, sourceCode });
        let fixedCode = sortedImports.join("\n");

        if (preserveNonImportCode) {
          const anotherTextsBetweenImports = getTextBetweenImports({ importNodes, sourceCode });
          if (anotherTextsBetweenImports) {
            fixedCode += `\n\n${ anotherTextsBetweenImports }`;
          }
        }

        if (textBetweenImports !== fixedCode) {
          reportIncorrectOrder(context, importNodes, fixedCode);
        }
      },
    };
  },
};
