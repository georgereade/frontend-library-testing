import * as styles from "./transferButtons.css";
import Button from "../Button/Button";

const TransferButtons = () => {
  return (
    <div className={styles.saveBar}>
      <Button className={styles.primaryButton}>Auto Pick</Button>
      <Button className={styles.secondaryButton}>Reset</Button>
      <Button className={styles.tertiaryButton}>Make Transfers</Button>
      <Button className={styles.primaryButton} fullWidth>
        Auto Pick (with optional fullWidth prop)
      </Button>
    </div>
  );
};

export default TransferButtons;
