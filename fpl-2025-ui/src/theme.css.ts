import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";
import { em } from "polished";

const blue = "#05f0ff";
const darkPink = "#e90052";
const fantasy = "#00ff87";
const darkGrey = "#7a7a7a";
const lightGrey = "#efefef";
const offblack = "#2f2f2f";
const offWhite = "#fbfbfb";
const yellow = "#ebff00";
const green = "#07db77";
const red = "#ff1751;";
const white = "#ffffff";
const error = "#E60023";
const success = "#34A853";
const plPink = "#ff2882";
const purple = "#37003c";
const purple5 = "#F5F2F5";
const purple10 = "#ebe5eb";
const purple25 = "#FAF9FA";
const purple30 = "#C3B2C4";
const purple40 = "#AF99B1";
const purple70 = "#734c76";
const purple120 = "#1E0021";
const purpleDark = "#250029";
const purple60 = "#87668A";
const purple80 = "#541E5D";
const purple110 = "#28002B";

const breakpoints = {
  0: em("400px"),
  1: em("610px"),
  2: em("700px"),
  3: em("900px"),
  4: em("1024px"),
  5: em("1220px"),
};

export const root = createGlobalTheme(":root", {
  borders: "2px solid lightGrey",
  breakpoints,
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

export const colors = createThemeContract({
  bgColor: "",
  black: "",
  blue: "",
  bud: "",
  darkBlue: "",
  darkGreen: "",
  darkGrey: "",
  darkPink: "",
  difficulties: {
    1: { bg: "", color: "" },
    2: { bg: "", color: "" },
    3: { bg: "", color: "" },
    4: { bg: "", color: "" },
    5: { bg: "", color: "" },
  },
  elementStatus: {
    0: { bg: "", color: "" },
    25: { bg: "", color: "" },
    50: { bg: "", color: "" },
    75: { bg: "", color: "" },
  } as Record<number, { bg: string; color: string }>,
  elementTypes: {
    1: { bg: "", color: "" },
    2: { bg: "", color: "" },
    3: { bg: "", color: "" },
    4: { bg: "", color: "" },
  },
  error: "",
  onError: "",
  fantasy: "",
  green: "",
  grey: "",
  lightBlue: "",
  lightGrey: "",
  lightPurple: "",
  live: "",
  onLive: "",
  movement: {
    down: { bg: "", color: "" },
    same: { bg: "", color: "" },
    up: { bg: "", color: "" },
  },
  pink: "",
  red: "",
  pinkToOrange: "",
  primary: "",
  purple: "",
  onPrimary: "",
  primaryContainer: "",
  onPrimaryContainer: "",
  primaryFixed: "",
  onPrimaryFixed: "",
  onPrimaryFixedVariant: "",
  purpleDark: "",
  result: {
    w: "",
    d: "",
    l: "",
  },
  social: {
    facebook: { bg: "", color: "" },
    x: { bg: "", color: "" },
    google: { bg: "", color: "" },
    apple: { bg: "", color: "" },
  },
  success: "",
  onSuccess: "",
  surface: "",
  surfaceBright: "",
  surfaceContainer: "",
  surfaceContainerHigh: "",
  surfaceContainerHighest: "",
  onSurface: "",
  onSurfaceVariant: "",
  outline: "",
  outlineVariant: "",
  inverseSurface: "",
  inverseOnSurface: "",
  scrim: "",
  shadow: "",
  text: "",
  white: "",
  offWhite: "",
  yellow: "",
  purple5: "",
  purple10: "",
  purple25: "",
  purple30: "",
  purple40: "",
  purple70: "",
  purple120: "",
});

export const lightTheme = createTheme(colors, {
  bgColor: offWhite,
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
  error,
  onError: white,
  fantasy,
  green,
  grey: "#ebebe6",
  lightBlue: "#02efff",
  lightGrey,
  lightPurple: "#963cff",
  live: plPink,
  onLive: white,
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
  purple,
  onPrimary: white,
  primaryContainer: purple25,
  onPrimaryContainer: purple,
  primaryFixed: purple,
  onPrimaryFixed: white,
  onPrimaryFixedVariant: purple40,
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
  success,
  onSuccess: white,
  surface: white,
  surfaceBright: purple25,
  surfaceContainer: purple25,
  surfaceContainerHigh: purple5,
  surfaceContainerHighest: purple10,
  onSurface: purple,
  onSurfaceVariant: purple70,
  outline: purple30,
  outlineVariant: purple10,
  inverseSurface: purple,
  inverseOnSurface: white,
  scrim: purple120,
  shadow: purple120,
  text: purple,
  white: "#ffffff",
  offWhite: "#fbfbfb",
  yellow,
  purple5: purple5,
  purple10: purple10,
  purple25: purple25,
  purple30: purple30,
  purple40: purple40,
  purple70: purple70,
  purple120: purple120,
});

export const darkTheme = createTheme(colors, {
  bgColor: purple120,
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
  error,
  onError: white,
  fantasy,
  green,
  grey: "#ebebe6",
  lightBlue: "#02efff",
  lightGrey,
  lightPurple: "#963cff",
  live: plPink,
  onLive: white,
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
  primary: white,
  onPrimary: purple,
  primaryContainer: purple,
  onPrimaryContainer: white,
  primaryFixed: purple,
  onPrimaryFixed: white,
  onPrimaryFixedVariant: purple40,
  purple,
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
  success,
  onSuccess: white,
  surface: purple110,
  surfaceBright: purple,
  surfaceContainer: purple120,
  surfaceContainerHigh: purple110,
  surfaceContainerHighest: purple,
  onSurface: white,
  onSurfaceVariant: purple40,
  outline: purple60,
  outlineVariant: purple80,
  inverseSurface: white,
  inverseOnSurface: purple,
  scrim: purple120,
  shadow: purple120,
  text: offWhite,
  white: "#ffffff",
  offWhite: "#fbfbfb",
  yellow,
  purple5: purple5,
  purple10: purple10,
  purple25: purple25,
  purple30: purple30,
  purple40: purple40,
  purple70: purple70,
  purple120: purple120,
});

export const vars = { ...root, colors };
