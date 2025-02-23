export const allNewline0Valid = `
import {
  ref,
  computed,
} from "vue";
import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";
import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`;

export const allNewline1Valid = `
import {
  ref,
  computed,
} from "vue";

import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";

import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`;

export const allNewline2Valid = `
import {
  ref,
  computed,
} from "vue";


import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";


import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`;

export const allNewline3Valid = `
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



import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`;
