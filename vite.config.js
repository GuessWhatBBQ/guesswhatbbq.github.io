import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  root: "src",
  build: {
    outDir: '../'
  },
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
});
