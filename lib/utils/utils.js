export function getImportNodes({ node }) {
  return node.body.filter(n => n.type === "ImportDeclaration");
}

export function getImportTexts({ importNodes, sourceCode }) {
  return importNodes.map(imp => sourceCode.getText(imp));
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
