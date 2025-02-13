import { recipe } from "@vanilla-extract/recipes";
import { style, createVar } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";
import { sprinkles } from "../../sprinkles.css.ts";

// AlertWrap
export const alertWrap = style([
  {
    marginTop: vars.space[2],
    marginBottom: vars.space[2],
    textAlign: "center",
  },
  sprinkles({
    margin: {
      mobile: vars.space[2],
      tablet: `${vars.space[2]} 0`,
    },
  }),
]);

export const bgColor = createVar();
export const textColor = createVar();

export const alert = recipe({
  base: {
    padding: `${vars.space[1]} ${vars.space[4]}`,
    borderRadius: "4px",
    backgroundColor: bgColor,
    color: textColor,
  },

  variants: {
    type: {
      default: {
        backgroundColor: vars.colors.purple,
        color: vars.colors.fantasy,
      },
      error: {
        backgroundColor: vars.colors.error,
        color: "white",
      },
      info: {
        backgroundColor: vars.colors.purple,
        color: "white",
      },
      news: {},
    },
    textAlign: {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
    },
    isInline: {
      true: { display: "inline-block" },
    },
  },
});
