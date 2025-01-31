import { recipe } from "@vanilla-extract/recipes";
import { style, createVar } from "@vanilla-extract/css";
import { vars } from "../../theme.css"; // Assuming you already have theme.css set up

// AlertWrap
export const alertWrap = style({
  margin: vars.space[2],
  textAlign: "center",

  "@media": {
    // Replace with breakpoint from theme
    [`screen and (min-width: 900px)`]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
});

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
        backgroundColor: vars.colors.primary,
        color: vars.colors.fantasy,
      },
      error: {
        backgroundColor: vars.colors.error,
        color: "white",
      },
      info: {
        backgroundColor: vars.colors.primary,
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

// copnr: {
//   backgroundColor: vars.colors.elementStatus[copnr].bg,
//   color: vars.colors.elementStatus[copnr].color,
// },
