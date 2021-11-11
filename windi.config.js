import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";
import filters from "windicss/plugin/filters";
import typography from "windicss/plugin/typography";

export default defineConfig({
  preflight: false,
  darkMode: "class",
  plugins: [typography(), filters()],
  shortcuts: {},
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
});

// const colors = require("windicss/colors");
// const typography = require("windicss/plugin/typography");
// const filters = require("windicss/plugin/filters");

// module.exports = {
//   darkMode: "class",
//   plugins: [typography, filters],
//   shortcuts: {},
//   theme: {
//     extend: {
//       colors: {
//         ...colors,
//       },
//     },
//   },
// };
