import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css.ts";
// import { defineProperties } from "rainbow-sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    animation: ["modalSlideBottom", "modalSlideRight"],
    flexBasis: ["90%", "40%"],
    margin: [vars.space[2], `${vars.space[2]} 0`, "0", "auto"],
    width: ["300px"],
    height: ["90vh"],
    marginRight: ["1%"],
    borderLeft: [`1px ${vars.colors.primary} solid`],
  },
});

// const responsiveProperties = defineProperties({
//   conditions: {
//     mobile: {},
//     tablet: { "@media": "screen and (min-width: 768px)" },
//     desktop: { "@media": "screen and (min-width: 1024px)" },
//   },
//   defaultCondition: "mobile",
//   //   properties: {
// //     animation: ["modalSlideBottom", "modalSlideRight"],
// //     flexBasis: ["90%", "40%"],
// //     margin: [vars.space[2], `${vars.space[2]} 0`, "0"],
// //   },
//   dynamicProperties: {
//     flexBasis: true,
//     margin: true,
//   },
//   staticProperties: {
//     animation: ["modalSlideBottom", "modalSlideRight"],
//   },
// });

// Create sprinkles
// export const sprinkles = createSprinkles(responsiveProperties);
export const sprinkles = createSprinkles(responsiveProperties);

// Export Sprinkles type
// export type Sprinkles = Parameters<typeof sprinkles>[0];
export type Sprinkles = Parameters<typeof sprinkles>[0];
