export const vueInvalid1 = {
  code: `
import {computed,
  ref,
} from "vue";
`,
  output: `
import {
  computed,
  ref,
} from "vue";
`,
  messageId: "asc_newline_true",
};

export const vueInvalid2 = {
  code: `
import {
  ref,
  computed,
} from "vue";
`,
  output: `
import {
  computed,
  ref,
} from "vue";
`,
  messageId: "asc_newline_true",
};

export const vueOneImportInvalid = {
  code: `
import { computed,
} from "vue";
`,
  output: `
import {
  computed,
} from "vue";
`,
  messageId: "asc_newline_true",
};