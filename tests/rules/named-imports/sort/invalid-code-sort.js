export const sortAscInvalid = {
  code: `
import {
  h,
  ref,
  computed,
} from "vue";
`,
  output: `
import {
  computed,
  h,
  ref,
} from "vue";
`,
  messageId: "asc_newline_true",
};

export const sortDescInvalid = {
  code: `
import {
  computed,
  h,
  ref,
} from "vue";
`,
  output: `
import {
  ref,
  h,
  computed,
} from "vue";
`,
  messageId: "desc_newline_true",
};

export const sortNoneInvalid = {
  code: `
import {  h,
  computed,
  ref,
} from "vue";
`,
  output: `
import {
  h,
  computed,
  ref,
} from "vue";
`,
  messageId: "none_newline_true",
};
