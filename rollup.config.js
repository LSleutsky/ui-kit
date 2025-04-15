import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import fs from "fs";
import babelPlugin from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import generateDts from "rollup-plugin-dts";

const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
const input = "src/index.ts";

export default [
  // JS bundle
  {
    input,
    output: [
      {
        file: "dist/bundle.cjs.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/bundle.esm.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "./tsconfig.json"
      })
    ],
    external: ["react", "react-native"] // You can expand this with @rneui/themed, etc.
  },

  // Type declarations
  {
    input,
    output: {
      file: "dist/index.d.ts",
      format: "es"
    },
    plugins: [generateDts()]
  }
];
