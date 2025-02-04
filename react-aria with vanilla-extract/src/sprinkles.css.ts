import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    animation: ["modalSlideBottom", "modalSlideRight"],
  },
});

// Create sprinkles
export const sprinkles = createSprinkles(responsiveProperties);

// Export Sprinkles type
export type Sprinkles = Parameters<typeof sprinkles>[0];
