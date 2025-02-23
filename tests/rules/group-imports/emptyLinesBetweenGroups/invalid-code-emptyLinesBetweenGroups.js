export const allNewline0Invalid = {
  code: `
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
`,
  output: `
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
`,
  messageId: "incorrectOrder",
};

export const allNewline1Invalid = {
  code: `
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
`,
  output: `
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
`,
  messageId: "incorrectOrder",
};

export const allNewline2Invalid = {
  code: `
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
`,
  output: `
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
`,
  messageId: "incorrectOrder",
};

export const allNewline3Invalid = {
  code: `
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



import Foo from "@/components/Foo.vue";
import Bar from "@/components/Bar.vue";



import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`,
  messageId: "incorrectOrder",
};
