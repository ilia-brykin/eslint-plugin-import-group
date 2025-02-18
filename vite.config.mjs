import path from "path";
import {
  defineConfig,
} from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      name: "AlohaVue",
      fileName: format => `index.${ format }.js`,
    },
  },
});
