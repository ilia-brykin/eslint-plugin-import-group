export const onlyComponentsValid = `
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
`;

export const vueAndComponentsValid = `
import {
  ref,
  computed,
} from "vue";

import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
`;

export const vueAlohaAndComponentsValid = `
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
`;

export const vueAlohaComponentsAndRestValid = `
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

import Aloha from "@/components/aloha.vue";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import axios from "axios";
import moment from "moment";
import {getText} from "utils";
import {forEach} from "lodash-es";
`;
