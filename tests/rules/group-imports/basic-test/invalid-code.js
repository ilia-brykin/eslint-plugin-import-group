export const onlyComponentsInvalid = {
  code: `
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
`,
  output: `
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
`,
  messageId: "incorrectOrder",
};

export const vueAndComponentsInvalid = {
  code: `
import Foo from "@/components/Foo.vue";
import {
  ref,
  computed,
} from "vue";
import Bar from "@/components/Bar.vue";
`,
  output: `
import {
  ref,
  computed,
} from "vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
`,
  messageId: "incorrectOrder",
};

export const vueAlohaAndComponentsInvalid = {
  code: `
import Foo from "@/components/Foo.vue";
import {
  useRouter,
} from "vue-router";
import {
  AButton,
  ALink,
} from "aloha-vue";
import {
  ref,
  computed,
} from "vue";
import Bar from "@/components/Bar.vue";
`,
  output: `
import {
  ref,
  computed,
} from "vue";
import {
  useRouter,
} from "vue-router";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
`,
  messageId: "incorrectOrder",
};