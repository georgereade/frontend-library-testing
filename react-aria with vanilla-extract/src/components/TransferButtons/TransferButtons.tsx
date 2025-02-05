import * as styles from "./transferButtons.css";
import Button from "../Button/Button";

const TransferButtons = () => {
  return (
    <div className={styles.saveBar}>
      <Button className={styles.primaryButton}>Primary</Button>
      <Button className={styles.secondaryButton}>Secondary</Button>
      <Button className={styles.tertiaryButton}>Tertiary</Button>
    </div>
  );
};

export default TransferButtons;
