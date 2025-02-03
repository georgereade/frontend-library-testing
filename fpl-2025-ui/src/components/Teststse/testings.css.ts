import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

// Overlay Styles
export const overlay = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.blue,
});

export const boxes = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.blue,
  fontSize: "xx-large",
});
