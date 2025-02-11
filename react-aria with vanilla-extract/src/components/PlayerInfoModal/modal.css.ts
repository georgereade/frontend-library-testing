import { style, keyframes, globalKeyframes } from "@vanilla-extract/css";
import { vars } from "../../theme.css.ts";
import { sprinkles } from "../../sprinkles.css.ts";

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
  display: "flex",
  justifyContent: "center",
  zIndex: "100",
  width: "100vw",
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

export const modal = style([
  {
    position: "fixed",
    right: 0,
    top: 0,
    backgroundColor: vars.colors.bgColor,
    color: vars.colors.onPrimaryContainer,
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
    // need to set width manually as can't use sprinkles with selectors
    "@media": {
      [`screen and (min-width: 768px)`]: {
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
  sprinkles({
    width: { mobile: "95vw", tablet: "300px", desktop: "300px" },
    top: { mobile: "0", tablet: "auto" },
    bottom: { mobile: "0", tablet: "0" },
    height: { tablet: "90vh", desktop: "90vh" },
    margin: { tablet: "auto", desktop: "auto" },
    marginRight: { tablet: "1%", desktop: "1%" },
    marginTop: { mobile: "25%", tablet: "auto" },
    borderLeft: {
      tablet: `1px ${vars.colors.primary} solid`,
      desktop: `1px ${vars.colors.primary} solid`,
    },
  }),
]);

export const dialog = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "flex-start",
  selectors: {
    "&:focus-visible": {
      outline: "none",
    },
  },
});

export const closeButton = style({
  position: "absolute",
  top: 0,
  right: 0,
  borderRadius: vars.radii[1],
  padding: "2px",
  margin: "2px",
  background: vars.colors.bgColor,
  color: vars.colors.primary,
});

export const buttonRow = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around",
  marginTop: "auto",
  paddingBottom: "24px",
});
