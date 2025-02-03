import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

// Keyframe Animations
const modalBlur = keyframes({
  from: {
    backdropFilter: "blur(0)",
  },
  to: {
    backdropFilter: "blur(2px)",
  },
});

const modalSlide = keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

// Overlay Styles
export const overlay = style({
  position: "fixed",
  inset: 0,
  backdropFilter: "blur(2px)",

  selectors: {
    "&[data-entering]": {
      animation: `${modalBlur} 300ms`,
    },
    "&[data-exiting]": {
      animation: `${modalBlur} 300ms reverse ease-in`,
    },
  },
});

// Modal Styles
export const modal = style({
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  width: "300px",
  margin: "25px",
  backgroundColor: vars.colors.lightPurple,
  outline: "none",
  borderLeft: `1px solid ${vars.colors.outline}`,
  boxShadow: "-8px 0 20px rgba(0, 0, 0, 0.1)",
  color: vars.colors.onPrimary,
  padding: "8px",
  borderRadius: vars.radii[2],

  selectors: {
    "&[data-entering]": {
      animation: `${modalSlide} 300ms`,
    },
    "&[data-exiting]": {
      animation: `${modalSlide} 300ms reverse ease-in`,
    },
  },
});

export const button = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.onPrimary,
  borderRadius: vars.radii[2],
});
