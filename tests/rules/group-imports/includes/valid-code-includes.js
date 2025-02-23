export const componentsAndRestValid = `
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import moment from "moment";
import axios from "axios";
`;

export const vueAndComponentsValid = `
import {
  ref,
  computed,
} from "vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
`;

export const vueAlohaAndComponentsValid = `
import {
  ref,
  computed,
} from "vue";
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
  AButton,
  ALink,
} from "aloha-vue";

import Bar from "@/components/Bar.vue";
import Aloha from "@/components/aloha.vue";
import Foo from "@/components/Foo.vue";

import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
import moment from "moment";
`;
