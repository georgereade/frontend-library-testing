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
export const overlay = style([
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    position: "fixed",
    inset: 0,
    backdropFilter: "brightness(50%)",
    selectors: {
      "&[data-state='open']": {
        animation: `${modalBlur} 200ms`,
      },
      "&[data-state='closed']": {
        animation: `${modalBlur} 200ms reverse ease-in`,
      },
    },
  },
]);

export const dialog = style([
  {
    position: "fixed",
    height: "80%",
    right: 0,
    backgroundColor: vars.colors.bgColor,
    color: vars.colors.onPrimaryContainer,
    borderTop: `1px ${vars.colors.primary} solid`,
    padding: "8px",
    borderRadius: vars.radii[2],
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    selectors: {
      "&:focus-visible": {
        outline: "none",
      },
      "&[data-state='open']": {
        animation: `${modalSlideBottom} 200ms`,
      },
      "&[data-state='closed']": {
        animation: `${modalSlideBottom} 200ms reverse ease-in`,
      },
    },
    // need to hard code width as can't use sprinkles with selectors
    "@media": {
      [`screen and (min-width: 768px)`]: {
        selectors: {
          "&[data-state='open']": {
            animation: `${modalSlideRight} 200ms`,
          },
          "&[data-state='closed']": {
            animation: `${modalSlideRight} 200ms reverse ease-in`,
          },
        },
      },
    },
  },
  sprinkles({
    width: { mobile: "95vw", tablet: "300px", desktop: "300px" },
    bottom: { mobile: "0", tablet: "auto" },
    marginRight: { tablet: "1%", desktop: "1%" },
    marginBottom: { mobile: "0", tablet: "auto" },
    borderLeft: {
      tablet: `1px ${vars.colors.primary} solid`,
      desktop: `1px ${vars.colors.primary} solid`,
    },
  }),
]);

export const closeButton = style({
  position: "absolute",
  top: 0,
  right: 0,
  borderRadius: vars.radii[1],
  padding: "2px",
  margin: "2px",
  background: vars.colors.bgColor,
  color: vars.colors.primary,
  cursor: "pointer",
});

export const buttonRow = style({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around",
  marginTop: "auto",
  paddingBottom: "24px",
});
