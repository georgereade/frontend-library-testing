import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle(":root", {
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  background: vars.colors.bgColor,
});

globalStyle("body", {
  overflowX: "hidden",
  margin: 0,
  fontFamily: vars.fonts.regular,
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

export const copnrRow = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "4px",
});
