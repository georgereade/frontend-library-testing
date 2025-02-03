import * as styles from "./testings.css.ts";
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

const Testings = () => {
  return (
    <div className={styles.overlay}>
      <ComboBox>
        <Label>Favorite Animal</Label>
        <div>
          <Input />
          <Button>▼</Button>
        </div>
        <Popover>
          <ListBox className={styles.boxes}>
            <ListBoxItem className={styles.boxes}>Aardvark</ListBoxItem>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
            <ListBoxItem>Panda</ListBoxItem>
            <ListBoxItem>Snake</ListBoxItem>
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};

export default Testings;
