import { createContext, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (newTheme: Theme) => void; // ✅ Allow setting a specific theme
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {}, // Placeholder
});

export const useTheme = () => useContext(ThemeContext);
