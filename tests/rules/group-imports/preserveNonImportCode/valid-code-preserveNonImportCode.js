export const vueComponentsDirectivesAndRestValid = `
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";

import Aloha from "@/components/aloha.vue";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import Directive1 from "@/directives/directive1";
import Directive2 from "@/directives/directive2";

import axios from "axios";
import moment from "moment";
import {getText} from "utils";
import {forEach} from "lodash-es";
`;
