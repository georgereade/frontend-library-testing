import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

export const primaryButton = style({
  display: "block",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  border: "0",
  borderRadius: vars.radii[0],
  backgroundImage: `linear-gradient(to right, ${vars.colors.fantasy}, ${vars.colors.lightBlue})`,
  color: vars.colors.purple,
  fontFamily: vars.fonts.bold,
  fontSize: vars.fontSizes[0],
  boxShadow: `1px 1px 10px -4px rgba(0, 0, 0, 0.5)`,
  cursor: "pointer",
});

export const secondaryButton = style([
  primaryButton,
  {
    background: vars.colors.lightPurple,
    color: "white",
    boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.06)",
  },
]);

export const tertiaryButton = style([
  primaryButton,
  {
    background: vars.colors.lightGrey,
    color: vars.colors.purple,
    fontFamily: vars.fonts.regular,
    boxShadow: "0 1px 8px 0 rgba(black, 0.06)",
  },
]);

export const saveBar = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  gap: "4px",
  padding: `0 ${vars.space[2]} ${vars.space[4]}`,

  "@media": {
    [`screen and (min-width: 1024px)`]: {
      gap: "12px",
      position: "relative",

      "::after": {
        content: '""',
        position: "absolute",
        right: 0,
        bottom: 0,
        left: 0,
        height: "1px",
        backgroundImage: `linear-gradient(
          to right,
          ${vars.colors.lightGrey},
          ${vars.colors.lightGrey},
          ${vars.colors.lightGrey}
        )`,
      },
    },
  },
});
