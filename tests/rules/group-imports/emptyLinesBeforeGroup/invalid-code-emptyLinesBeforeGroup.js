export const lines2Components3RestInvalid = {
  code: `
import {
  ref,
  computed,
} from "vue";
import moment from "moment";
import {getText} from "utils";
import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";
import axios from "axios";
import {forEach} from "lodash-es";
`,
  output: `
import {
  ref,
  computed,
} from "vue";


import Bar from "@/components/Bar.vue";
import Foo from "@/components/Foo.vue";



import moment from "moment";
import {getText} from "utils";
import axios from "axios";
import {forEach} from "lodash-es";
`,
  messageId: "incorrectOrder",
};

export const lines2ComponentsInvalid = {
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
