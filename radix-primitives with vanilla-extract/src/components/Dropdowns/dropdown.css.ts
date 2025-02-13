import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

export const DropdownMenuCheckboxItem = style({
  color: vars.colors.primary,
  backgroundColor: vars.colors.surface,
  padding: vars.space[1],
  cursor: "pointer",
});

export const button = style({
  width: "min-content",
});
