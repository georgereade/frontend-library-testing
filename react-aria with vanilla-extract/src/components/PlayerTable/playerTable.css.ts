import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const tableHeader = style({
  cursor: "pointer",
});

export const tableColumn = style({
  minWidth: "150px",
  textAlign: "center",
  overflow: "hidden",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii[0],
  padding: vars.space[1],
  selectors: {
    "&[data-hovered]": {
      backgroundImage: `linear-gradient(to right, ${vars.colors.fantasy}, ${vars.colors.lightBlue})`,
      color: vars.colors.purple,
    },
    "&[data-focused]": {
      backgroundImage: `linear-gradient(to right, ${vars.colors.fantasy}, ${vars.colors.lightBlue})`,
      color: vars.colors.purple,
    },
  },
});

export const table = style({
  tableLayout: "fixed",
  width: "100%",
});

export const tableContainer = style({
  height: "175px",
  overflowY: "auto",
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii[0],
});
