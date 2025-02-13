import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

export const tagGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  fontSize: "small",
  color: vars.colors.primary,
});

export const tagList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
});

export const tag = style({
  color: vars.colors.primary,
  border: `1px solid ${vars.colors.primary}`,
  forcedColorAdjust: "none",
  borderRadius: "4px",
  padding: "2px 8px",
  fontSize: "0.929rem",
  outline: "none",
  cursor: "default",
  display: "flex",
  alignItems: "center",
  transition: "border-color 200ms",

  selectors: {
    "&[data-hovered]": {
      borderColor: vars.colors.onPrimary,
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${vars.colors.onPrimary}`,
      outlineOffset: "2px",
    },
    "&[data-selected]": {
      borderColor: vars.colors.fantasy,
      backgroundImage: `linear-gradient(to right, ${vars.colors.fantasy}, ${vars.colors.lightBlue})`,
      color: vars.colors.purple,
    },
  },
});

export const cross = style({
  height: "12px",
  display: "inline-block",
  padding: "0",
  margin: "0",
});
