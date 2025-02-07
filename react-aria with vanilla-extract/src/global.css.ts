import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css.ts";

globalStyle(":root", {
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  background: vars.colors.bgColor,
  fontFamily: vars.fonts.regular,
});

globalStyle("body", {
  overflowX: "hidden",
  margin: 0,
});

globalStyle("#app", {
  minHeight: "100vh",
  height: "100%",
  width: "100vw",
  color: vars.colors.primary,
  placeItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const disableFocusRing = style({
  selectors: {
    "&:focus-visible": {
      outline: "none",
    },
  },
});

export const appRow = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100vw",
  justifyContent: "space-evenly",
  padding: `${vars.space[3]} 0`,
});

export const appColumn = style({
  display: "flex",
  flexDirection: "column",
  flex: "0 1 40%",

  "@media": {
    [`screen and (max-width: 768px)`]: {
      flexBasis: "90%",
    },
  },
});
