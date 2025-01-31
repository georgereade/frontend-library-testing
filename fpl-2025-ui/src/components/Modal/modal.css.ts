import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../theme.css"; // Ensure you have a theme setup

// Keyframe Animations
const modalBlur = keyframes({
  from: {
    background: vars.colors.offWhite,
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
  background: vars.colors.offWhite,
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
  background: vars.colors.white, // Replace with a valid theme color
  outline: "none",
  borderLeft: `1px solid ${vars.colors.lightPurple}`, // Replace with a valid theme color
  boxShadow: "-8px 0 20px rgba(0, 0, 0, 0.1)",

  selectors: {
    "&[data-entering]": {
      animation: `${modalSlide} 300ms`,
    },
    "&[data-exiting]": {
      animation: `${modalSlide} 300ms reverse ease-in`,
    },
  },
});
