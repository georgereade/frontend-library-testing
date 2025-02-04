import * as styles from "./ThemeDropdown.css.ts";
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { useTheme } from "../../context/themeContext.ts";

const themes = ["light", "dark"] as const;

const ThemeDropdown = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ComboBox
      selectedKey={theme}
      className={styles.overlay}
      onSelectionChange={(newTheme: string | null) => {
        if (newTheme && newTheme !== theme) {
          toggleTheme();
        }
      }}
    >
      <Label>Select Theme</Label>
      <div>
        <Input
          value={theme.charAt(0).toUpperCase() + theme.slice(1)}
          readOnly
          className={styles.input}
        />
        <Button>▼</Button>
      </div>
      <Popover className={styles.popover}>
        <ListBox className={styles.boxes}>
          {themes.map((t) => (
            <ListBoxItem key={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

export default ThemeDropdown;
