import { style, keyframes, globalKeyframes } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";

// Keyframe Animations
const modalBlur = keyframes({
  from: {
    backdropFilter: "brightness(100%)",
  },
  to: {
    backdropFilter: "brightness(50%)",
  },
});

const modalSlideRight = "modalSlideRight";

globalKeyframes(modalSlideRight, {
  from: {
    transform: "translateX(110%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const modalSlideBottom = "modalSlideBottom";

globalKeyframes(modalSlideBottom, {
  from: {
    transform: "translateY(110%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

// Overlay Styles
export const overlay = style({
  position: "fixed",
  inset: 0,
  backdropFilter: "brightness(50%)",
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
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    width: "95vw",
    marginTop: "40%",
    backgroundColor: vars.colors.bgColor,
    color: vars.colors.primary,
    borderTop: `1px ${vars.colors.primary} solid`,
    padding: "8px",
    borderRadius: vars.radii[2],
    selectors: {
      "&[data-entering]": {
        animation: `${modalSlideBottom} 200ms`,
      },
      "&[data-exiting]": {
        animation: `${modalSlideBottom} 200ms reverse ease-in`,
      },
    },
    "@media": {
      [`screen and (min-width: 768px)`]: {
        width: "300px",
        height: "90vh",
        margin: "auto",
        marginRight: "1%",
        borderLeft: `1px ${vars.colors.primary} solid`,
        selectors: {
          "&[data-entering]": {
            animation: `${modalSlideRight} 200ms`,
          },
          "&[data-exiting]": {
            animation: `${modalSlideRight} 200ms reverse ease-in`,
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
  fontSize: vars.fontSizes[1],
});
