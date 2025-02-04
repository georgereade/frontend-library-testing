import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import { darkTheme, lightTheme } from "../theme.css";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.remove(lightTheme, darkTheme);
    document.documentElement.classList.add(
      theme === "dark" ? darkTheme : lightTheme
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
