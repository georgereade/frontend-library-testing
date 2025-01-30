import { createTheme } from "@vanilla-extract/css";
import { em } from "polished";

const blue = "#05f0ff";
const darkPink = "#e90052";
const fantasy = "#00ff87";
const darkGrey = "#7a7a7a";
const lightGrey = "#efefef";
const offblack = "#2f2f2f";
const purple = "#37003c";
const purple10 = "#ebe5eb";
const yellow = "#ebff00";
const purpleDark = "#250029";
const purple70 = "#734c76";
const green = "#07db77";
const red = "#ff1751;";
const breakpoints = {
  0: em("400px"),
  1: em("610px"),
  2: em("700px"),
  3: em("900px"),
  4: em("1024px"),
  5: em("1220px"),
};

export const [themeClass, vars] = createTheme({
  borders: "2px solid lightGrey",
  breakpoints,
  colors: {
    black: offblack,
    blue,
    bud: "#c7102d",
    darkBlue: "#627bff",
    darkGreen: "#029f4f",
    darkGrey,
    darkPink,
    difficulties: {
      1: {
        bg: "#375523",
        color: "white",
      },
      2: {
        bg: "#01FC7A",
        color: "black",
      },
      3: {
        bg: "#E7E7E7",
        color: "black",
      },
      4: {
        bg: red,
        color: "white",
      },
      5: {
        bg: "#80072D",
        color: "white",
      },
    },
    elementStatus: {
      0: {
        bg: "#c0020d",
        color: "white",
      },
      25: {
        bg: "#d44401",
        color: "white",
      },
      50: {
        bg: "#ffab1b",
        color: offblack,
      },
      75: {
        bg: "#ffe65b",
        color: offblack,
      },
    },
    elementTypes: {
      1: {
        bg: yellow,
        color: purple,
      },
      2: {
        bg: fantasy,
        color: purple,
      },
      3: {
        bg: blue,
        color: purple,
      },
      4: {
        bg: darkPink,
        color: "white",
      },
    },
    error: "#fb251b",
    fantasy,
    green,
    grey: "#ebebe6",
    lightBlue: "#02efff",
    lightGrey,
    lightPurple: "#963cff",
    movement: {
      down: {
        bg: "#fc2c80",
        color: "white",
      },
      same: {
        bg: darkGrey,
        color: darkGrey,
      },
      up: {
        bg: "#05fa87",
        color: purple,
      },
    },
    pink: "#ff2882",
    red,
    pinkToOrange:
      "linear-gradient(30deg, #963cff, #c710e6 5%, #e900ca, #ff00ad, #ff0090, #ff0075, #ff005a, #ff2e41, #ff5028, #ff6900 87.5%);",
    primary: purple,
    purple10,
    purple70,
    purpleDark,
    result: {
      w: "#13cf00",
      d: "#76766f",
      l: "#d8191f",
    },
    social: {
      facebook: {
        bg: "#1877f2",
        color: "white",
      },
      x: {
        bg: "black",
        color: "white",
      },
      google: {
        bg: "white",
        color: purple,
      },
      apple: {
        bg: "black",
        color: "white",
      },
    },
    success: "#28A96C",
    text: offblack,
    white: "#ffffff",
    offWhite: "#fbfbfb",
    yellow,
  },
  fonts: {
    bold: '"PremierSans-Bold", Arial, "Helvetica Neue", Helvetica, "sans-seriff"',
    boldItalic:
      '"PremierSans-Bold-Italic", Arial, "Helvetica Neue", Helvetica, "sans-seriff"',
    italic:
      '"PremierSans-Italic", Arial, "Helvetica Neue", Helvetica, "sans-seriff"',
    light:
      '"PremierSans-Light", Arial, "Helvetica Neue", Helvetica, "sans-serif"',
    regular:
      '"PremierSans-Regular", Arial, "Helvetica Neue", Helvetica, "sans-serif"',
    bud: '"BudBold", Arial, "Helvetica Neue", Helvetica, sans-serif;',
  },
  fontSizes: {
    0: "1.2rem",
    1: "1.3rem",
    2: "1.4rem",
    3: "1.6rem",
    4: "1.8rem",
  },
  radii: { 0: "3px", 1: "6px", 2: "8px", 3: "14px", 4: "16px" },
  space: {
    0: "0",
    1: "0.4rem",
    2: "0.8rem",
    3: "1.2rem",
    4: "1.6rem",
    5: "2rem",
    6: "2.4rem",
  },
  zIndex: {
    0: "80",
    1: "90",
    2: "110",
    3: "120",
  },
});
