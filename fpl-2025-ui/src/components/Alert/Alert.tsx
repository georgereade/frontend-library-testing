import React from "react";
import { alertWrap, alert, bgColor, textColor } from "./alert.css.ts"; // Import the styles
import { vars } from "../../theme.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface IStyleProps {
  copnr?: number;
  isInline?: boolean;
  type?: "default" | "error" | "news" | "info";
  textAlign?: "left" | "center";
}

interface IProps extends IStyleProps {
  children: React.ReactNode;
}

// const getElementStatusColors = (copnr: number | null) => {
//   if (copnr === null) return {};
//   const status = vars.colors.elementStatus[copnr]; // Direct cast to number
//   return status ? { [bgColor]: status.bg, [textColor]: status.color } : {}; // Return empty object if copnr is invalid
// };

const Alert: React.FC<IProps> = ({
  children,
  copnr = null,
  textAlign = "center",
  type = "default",
  isInline,
}) => {
  return (
    <div className={alertWrap}>
      <div
        className={alert({ type, textAlign, isInline })}
        // style={assignInlineVars(getElementStatusColors(copnr))}
        style={assignInlineVars({
          ...(copnr !== null
            ? {
                [bgColor]:
                  vars.colors.elementStatus[
                    copnr as keyof typeof vars.colors.elementStatus
                  ]?.bg,
                [textColor]:
                  vars.colors.elementStatus[
                    copnr as keyof typeof vars.colors.elementStatus
                  ]?.color,
              }
            : {}),
        })}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
