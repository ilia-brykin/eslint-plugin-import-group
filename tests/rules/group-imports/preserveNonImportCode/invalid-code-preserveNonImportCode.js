export const preserveNonImportCodeTrueInvalid = {
  code: `
import {
  ref,
  computed,
} from "vue";
// Aloha
import {
  AButton,
  ALink,
} from "aloha-vue";
console.log("Aloha");

import Bar from "@/components/Bar.vue";
import Aloha from "@/components/aloha.vue";
import Foo from "@/components/Foo.vue";

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";
`,
  output: `
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

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";

// Aloha
console.log("Aloha");
`,
  messageId: "incorrectOrder",
};

export const preserveNonImportCodeTrue2Invalid = {
  code: `
import {
  ref,
  computed,
} from "vue";

import {
  AButton,
  ALink,
} from "aloha-vue";
console.log("Aloha");



// Todo: Aloha
import Bar from "@/components/Bar.vue";
import Aloha from "@/components/aloha.vue";
let foo = "";
import Foo from "@/components/Foo.vue";
import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";
// Aloha
import moment from "moment";
import axios from "axios";

import {getText} from "utils";
import {forEach} from "lodash-es";
`,
  output: `
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

import Directive2 from "@/directives/directive2";
import Directive1 from "@/directives/directive1";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";

console.log("Aloha");
// Todo: Aloha
let foo = "";
// Aloha
`,
  messageId: "incorrectOrder",
};

export const preserveNonImportCodeFalseInvalid = {
  code: `
import {
  ref,
  computed,
} from "vue";
import {
  AButton,
  ALink,
} from "aloha-vue";
console.log("Aloha");

import Aloha from "@/components/aloha.vue";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";

import Directive1 from "@/directives/directive1";
import Directive2 from "@/directives/directive2";

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";
`,
  output: `
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

import moment from "moment";
import axios from "axios";
import {getText} from "utils";
import {forEach} from "lodash-es";
`,
  messageId: "incorrectOrder",
};
