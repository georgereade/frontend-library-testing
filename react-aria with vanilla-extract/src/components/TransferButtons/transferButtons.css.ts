import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";
import { sprinkles } from "../../sprinkles.css.ts";

export const saveBar = style([
  {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
  sprinkles({
    padding: {
      mobile: `0 ${vars.space[2]} ${vars.space[4]}`,
      desktop: `0 ${vars.space[2]} ${vars.space[4]}`,
    },
    gap: { mobile: "4px", desktop: "12px" },
    maxWidth: { mobile: "100%", desktop: "500px" },
  }),
]);
