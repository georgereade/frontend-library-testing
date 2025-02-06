import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

export const saveBar = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: `0 ${vars.space[2]} ${vars.space[4]}`,
  gap: "4px",
  maxWidth: "500px",

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
