export const vueValid = `
import {
  computed,
  ref,
} from "vue";
`;

export const vueAlohaAndComponentsValid = `
import {
  computed,
  ref,
} from "vue";
import {
  AButton,
  ALink,
  ATable,
} from "aloha-vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
`;

export const vueAlohaComponentsAndRestValid = `
import {
  computed,
  ref,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Aloha from "@/components/aloha.vue";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import axios from "axios";
import moment from "moment";
import {
  getText,
} from "utils";
import {
  cloneDeep,
  forEach,
} from "lodash-es";
`;
