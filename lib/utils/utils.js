export function getImportNodes({ node }) {
  return node.body.filter(n => n.type === "ImportDeclaration");
}

export function getImportTexts({ importNodes, sourceCode }) {
  return importNodes.map(imp => sourceCode.getText(imp));
}

export function getNodeTexts({ nodes, sourceCode }) {
  return nodes.map(imp => sourceCode.getText(imp));
}

export function normalizeString(str) {
  return str.replace(/\r\n/g, "\n").trim();
}

export function debugStringDiff(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(`Different lengths: ${ str1.length } vs ${ str2.length }`);
  }

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] !== str2[i]) {
      console.log(`Difference at index ${ i }: "${ str1[i] || "␀" }" vs "${ str2[i] || "␀" }"`);
    }
  }
}

export function removeExtraNewlines(text) {
  // Remove newline characters from the start and end of the string
  const trimmed = text.replace(/^\n+|\n+$/g, "");
  // Replace sequences of two or more newline characters with a single newline
  return trimmed.replace(/\n{2,}/g, "\n");
}

export function consoleString(text) {
  console.log(JSON.stringify(text, null, 0));
}

export function removeCarriageReturns(text) {
  return text.replace(/\r/g, "");
}