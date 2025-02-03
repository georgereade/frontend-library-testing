// themeContext.ts
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
