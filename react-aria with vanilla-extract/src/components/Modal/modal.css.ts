import { style, keyframes, globalKeyframes } from "@vanilla-extract/css";
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

const modalSlideRight = "modalSlideRight";

globalKeyframes(modalSlideRight, {
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const modalSlideBottom = "modalSlideBottom";

globalKeyframes(modalSlideBottom, {
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

// Overlay Styles
export const overlay = style({
  position: "fixed",
  inset: 0,
  backdropFilter: "blur(2px)",
  selectors: {
    "&[data-entering]": {
      animation: `${modalBlur} 200ms`,
    },
    "&[data-exiting]": {
      animation: `${modalBlur} 200ms reverse ease-in`,
    },
  },
});

// Modal Styles
export const modal = style([
  {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "300px",
    margin: "25px",
    backgroundColor: vars.colors.bgColor,
    color: vars.colors.primary,
    outline: "none",
    borderLeft: `1px solid ${vars.colors.outline}`,
    padding: "8px",
    borderRadius: vars.radii[2],
    selectors: {
      "&[data-entering]": {
        animation: `${modalSlideRight} 200ms`,
      },
      "&[data-exiting]": {
        animation: `${modalSlideRight} 200ms reverse ease-in`,
      },
    },
    "@media": {
      [`screen and (max-width: 768px)`]: {
        selectors: {
          "&[data-entering]": {
            animation: `${modalSlideBottom} 200ms`,
          },
          "&[data-exiting]": {
            animation: `${modalSlideBottom} 200ms reverse ease-in`,
          },
        },
      },
    },
  },
]);

export const button = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.onPrimary,
  borderRadius: vars.radii[2],
});
