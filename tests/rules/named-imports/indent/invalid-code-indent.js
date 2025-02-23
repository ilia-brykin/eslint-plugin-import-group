export const newlineTrueIndent0Invalid = {
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

export const newlineTrueIndent1Invalid = {
  code: `
import {
  computed,
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

export const newlineTrueIndent2Invalid = {
  code: `
import {
computed,
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

export const newlineTrueIndent4Invalid = {
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

export const newlineFalseIndent0Invalid = {
  code: `
import {computed,
  ref,
} from "vue";
`,
  output: `
import {computed,ref} from "vue";
`,
  messageId: "asc_newline_false",
};

export const newlineFalseIndent1Invalid = {
  code: `
import {computed,ref} from "vue";
`,
  output: `
import { computed, ref } from "vue";
`,
  messageId: "asc_newline_false",
};

export const newlineFalseIndent2Invalid = {
  code: `
import {computed,ref} from "vue";
`,
  output: `
import {  computed,  ref  } from "vue";
`,
  messageId: "asc_newline_false",
};
