import { ReactNode, useState } from "react";
import { ThemeContext } from "./themeContext";
import { lightTheme, darkTheme } from "../theme.css";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
