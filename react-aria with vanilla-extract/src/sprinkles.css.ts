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
    borderLeft: [`1px ${vars.colors.primary} solid`],
    bottom: ["0", "auto"],
    flexBasis: ["90%", "40%"],
    gap: ["4px", "12px"],
    height: ["90vh"],
    margin: [vars.space[2], `${vars.space[2]} 0`, "0", "auto"],
    marginRight: ["1%"],
    marginTop: ["25%", "auto"],
    maxWidth: ["100%", "500px"],
    padding: [`0 ${vars.space[2]} ${vars.space[4]}`],
    top: ["0", "auto", "10%", "-100px"],
    width: ["300px", "95vw"],
  },
});

// Create sprinkles
export const sprinkles = createSprinkles(responsiveProperties);

// Export Sprinkles type
export type Sprinkles = Parameters<typeof sprinkles>[0];
