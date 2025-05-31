import { defineConfig } from "tsup";
import { readFile, readFileSync } from "fs";

const license = readFileSync("./LICENSE", "utf-8");
const pkg = JSON.parse(readFileSync("./package.json", "utf-8")) as Record<string, string>;

export default defineConfig({
  entry: ["lib/index.ts"],
  splitting: false,
  sourcemap: true,
  format: ["cjs", "esm", "iife"],
  dts: true,
  bundle: true,
  globalName: "growProtocol",
  outExtension({ format }) {
    return {
      js: format === "iife" ? ".global.js" : format === "esm" ? ".mjs" : ".js"
    };
  },
  banner: {
    js: `
/*!
 * grow-protocol v${pkg.version}
 * Copyright ${new Date().getFullYear()}
 * Licensed under MIT (https://github.com/StileDevs/grow-protocol/blob/main/LICENSE) 
*/
`
  },
  outDir: "dist",
  minify: true,
  clean: true
});
