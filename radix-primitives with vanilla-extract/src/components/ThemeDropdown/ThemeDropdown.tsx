import * as styles from "./themeDropdown.css.ts";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { useTheme } from "../../context/themeContext.ts";
import { Moon, Sun } from "lucide-react";

const themes = [
  { id: 1, name: "light" },
  { id: 2, name: "dark" },
];

const ThemeDropdown = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select
      selectedKey={theme}
      label="Select Theme"
      className={styles.overlay}
      onSelectionChange={(newTheme: "light" | "dark") => setTheme(newTheme)}
      defaultSelectedKey={theme}
      aria-label="select-theme"
    >
      <Button className={styles.button}>
        <SelectValue>{theme === "light" ? <Sun /> : <Moon />}</SelectValue>
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover className={styles.popover}>
        <ListBox className={styles.boxes} selectionMode="single" items={themes}>
          <ListBoxItem id="light" className={styles.item} aria-label="light">
            <Sun className={styles.icon} /> Light
          </ListBoxItem>
          <ListBoxItem id="dark" className={styles.item} aria-label="dark">
            <Moon className={styles.icon} /> Dark
          </ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
};

export default ThemeDropdown;
