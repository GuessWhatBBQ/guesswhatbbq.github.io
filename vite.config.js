import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  plugins: [
    inject({
      $: "jquery",
      jQuery: "jquery",
      include: "**/*.js",
    }),
    // commonjs(),
  ],
});
