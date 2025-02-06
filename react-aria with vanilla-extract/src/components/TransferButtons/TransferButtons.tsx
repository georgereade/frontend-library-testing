import * as styles from "./transferButtons.css";
import Button from "../Button/Button";

const TransferButtons = () => {
  return (
    <div className={styles.saveBar}>
      <Button variant="primary" transfer>
        Auto Pick
      </Button>
      <Button variant="secondary" transfer>
        Reset
      </Button>
      <Button variant="tertiary" transfer>
        Make Transfers
      </Button>
      <Button variant="primary" fullWidth transfer>
        Auto Pick (with optional fullWidth prop)
      </Button>
      <Button variant="filled" transfer>
        Filled
      </Button>
      <Button variant="ghost" transfer>
        Ghost
      </Button>
    </div>
  );
};

export default TransferButtons;
