import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css.ts";

export const button = recipe({
  base: {
    display: "block",
    border: "0",
    borderRadius: vars.radii[0],
    fontFamily: vars.fonts.bold,
    cursor: "pointer",
    padding: vars.space[1],
    margin: vars.space[1],
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "auto",
      },
    },
    variant: {
      primary: {
        backgroundImage: `linear-gradient(to right, ${vars.colors.fantasy}, ${vars.colors.lightBlue})`,
        color: vars.colors.purple,
        boxShadow: `1px 1px 10px -4px rgba(0, 0, 0, 0.5)`,
      },
      secondary: {
        background: vars.colors.lightPurple,
        color: "white",
        boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.06)",
      },
      tertiary: {
        background: vars.colors.lightGrey,
        color: vars.colors.purple,
      },
      filled: {
        background: vars.colors.primary,
        color: vars.colors.bgColor,
        borderRadius: vars.radii[4],
        padding: vars.space[2],
        border: `1px solid ${vars.colors.primary}`,
        selectors: {
          "&[data-hovered]": {
            background: vars.colors.bgColor,
            color: vars.colors.primary,
          },
        },
      },
      ghost: {
        background: vars.colors.bgColor,
        color: vars.colors.primary,
        borderRadius: vars.radii[4],
        padding: vars.space[2],
        border: `1px solid ${vars.colors.primary}`,
        selectors: {
          "&[data-hovered]": {
            background: vars.colors.primary,
            color: vars.colors.bgColor,
          },
        },
      },
    },
    transfer: {
      true: {
        padding: vars.space[3],
        fontSize: vars.fontSizes[0],
      },
    },
  },
  defaultVariants: {
    fullWidth: false,
    transfer: false,
  },
});
