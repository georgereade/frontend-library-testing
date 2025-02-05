import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css.ts";

export const button = recipe({
  base: {
    display: "block",
    padding: "1.5rem",
    border: "0",
    borderRadius: vars.radii[0],
    fontFamily: vars.fonts.bold,
    fontSize: vars.fontSizes[0],
    cursor: "pointer",
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
  },
  defaultVariants: {
    fullWidth: false,
  },
});
