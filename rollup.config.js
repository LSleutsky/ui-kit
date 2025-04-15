import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
// Import package.json with the correct type attribute
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      strict: "false"
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
      strict: "false"
    }
  ],
  context: "window",
  plugins: [
    peerDepsExternal(),
    typescript({ tsconfig: "./tsconfig.json" }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"]
    }),
    postcss({
      extensions: [".css", ".scss"],
      minimize: true,
      extract: "styles.css"
    }),
    json(),
    terser(),
    // ...other plugins
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      // Skip processing React Native files
      resolveOnly: (module) => !module.includes("react-native")
    }),
    commonjs({
      // Exclude React Native related packages
      exclude: [
        "**/node_modules/react-native/**",
        "**/node_modules/react-native-*/**"
      ]
    })
  ],
  external: [
    "react",
    "react-dom",
    // Add explicit React Native related packages
    "react-native",
    "react-native-ratings",
    // Use a function to catch other related packages
    (id) => /react-native/.test(id)
  ]
};
