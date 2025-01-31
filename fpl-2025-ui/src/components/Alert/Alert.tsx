import React from "react";
import { alertWrap, alert, bgColor, textColor } from "./alert.css.ts"; // Import the styles
import { vars } from "../../theme.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface IStyleProps {
  copnr?: number | null;
  isInline?: boolean;
  type?: "default" | "error" | "news" | "info";
  textAlign?: "left" | "center";
}

interface IProps extends IStyleProps {
  children: React.ReactNode;
}

const getElementStatusColors = (copnr: number | null) => {
  if (copnr === null || vars.colors.elementStatus[copnr] === undefined)
    return {};

  return {
    [bgColor]: vars.colors.elementStatus[copnr].bg,
    [textColor]: vars.colors.elementStatus[copnr].color,
  };
};

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
        style={assignInlineVars(getElementStatusColors(copnr))}
        // style={assignInlineVars({
        //   ...(copnr !== null
        //     ? {
        //         [bgColor]: vars.colors.elementStatus[copnr]?.bg,
        //         [textColor]: vars.colors.elementStatus[copnr]?.color,
        //       }
        //     : {}),
        // })}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Alert;
