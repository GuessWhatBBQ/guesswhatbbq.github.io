import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  root: "src",
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
});
