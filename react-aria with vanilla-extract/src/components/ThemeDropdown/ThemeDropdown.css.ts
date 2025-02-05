import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

// Overlay Styles
export const overlay = style({
  display: "flex",
  flexDirection: "column",
  color: vars.colors.primary,
  backgroundColor: vars.colors.onPrimary,
  margin: "8px 0px",
  marginBottom: vars.space[4],
  borderRadius: vars.radii[2],
});

export const boxes = style({
  color: vars.colors.onPrimaryContainer,
  backgroundColor: vars.colors.primaryContainer,
  borderRadius: vars.radii[2],
});

export const item = style({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 0px",
});

export const icon = style({
  paddingRight: "4px",
});

export const button = style({
  width: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.colors.bgColor,
  color: vars.colors.primary,
  borderRadius: vars.radii[2],
});

export const input = style({
  margin: "0px",
  fontSize: "1.072rem",
  color: vars.colors.onPrimaryContainer,
  backgroundColor: vars.colors.primaryContainer,
  border: `1px solid ${vars.colors.fantasy}`,
  borderRadius: "6px",
  padding: "0.286rem 2rem 0.286rem 0.571rem",
  verticalAlign: "middle",
});

export const popover = style({
  width: "var(--trigger-width)",
});

globalStyle(`${popover} .react-aria-ListBox`, {
  display: "block",
  width: "unset",
  maxHeight: "inherit",
  minHeight: "unset",
  border: "none",
});

globalStyle(`${popover} .react-aria-ListBox .react-aria-Header`, {
  paddingLeft: "1.571rem",
});

globalStyle(`${popover} .react-aria-ListBoxItem`, {
  padding: "0.286rem 0.571rem 0.286rem 1.571rem",
  borderRadius: vars.radii[2],
});

globalStyle(`${popover} .react-aria-ListBoxItem[data-focus-visible]`, {
  outline: "none",
});

globalStyle(`${popover} .react-aria-ListBoxItem[data-selected]`, {
  fontWeight: "600",
  background: "unset",
  color: vars.colors.onPrimary,
  position: "relative", // Needed for the pseudo-element
});

globalStyle(`${popover} .react-aria-ListBoxItem[data-selected]::before`, {
  content: '"✓"',
  position: "absolute",
  top: "4px",
  left: "4px",
});

globalStyle(
  `${popover} .react-aria-ListBoxItem[data-focused], ${popover} .react-aria-ListBoxItem[data-pressed]`,
  {
    background: vars.colors.primary,
    color: vars.colors.onPrimary,
  }
);
