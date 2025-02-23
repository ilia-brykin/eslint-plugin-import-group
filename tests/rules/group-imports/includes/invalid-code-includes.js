export const componentsAndRestInvalid = {
  code: `
import Foo from "@/components/Foo.vue";
import moment from "moment";
import Bar from "@/components/Bar.vue";
import axios from "axios";
`,
  output: `
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import moment from "moment";
import axios from "axios";
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

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
`,
  messageId: "incorrectOrder",
};

export const vueAlohaComponentsAndRestInvalid = {
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
  messageId: "incorrectOrder",
  output: `
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import {
  useRouter,
} from "vue-router";
`,
};