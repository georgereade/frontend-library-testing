import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

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
  padding: "4px",
});

export const disableFocusRing = style({
  selectors: {
    "&:focus-visible": {
      outline: "none",
    },
  },
});
