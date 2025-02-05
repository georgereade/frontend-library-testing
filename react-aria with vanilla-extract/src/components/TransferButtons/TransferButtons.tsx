import * as styles from "./transferButtons.css";
import Button from "../Button/Button";

const TransferButtons = () => {
  return (
    <div className={styles.saveBar}>
      <Button className={styles.primaryButton} transfer>
        Auto Pick
      </Button>
      <Button className={styles.secondaryButton} transfer>
        Reset
      </Button>
      <Button className={styles.tertiaryButton} transfer>
        Make Transfers
      </Button>
      <Button className={styles.primaryButton} fullWidth transfer>
        Auto Pick (with optional fullWidth prop)
      </Button>
    </div>
  );
};

export default TransferButtons;
