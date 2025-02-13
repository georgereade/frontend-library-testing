import * as styles from "./transferButtons.css";
import FPLButton from "../Button/Button";

const TransferButtons = () => {
  return (
    <div className={styles.saveBar}>
      <FPLButton variant="primary" transfer>
        Auto Pick
      </FPLButton>
      <FPLButton variant="secondary" transfer>
        Reset
      </FPLButton>
      <FPLButton variant="tertiary" transfer>
        Make Transfers
      </FPLButton>
      <FPLButton variant="primary" fullWidth transfer>
        Auto Pick (with optional fullWidth prop)
      </FPLButton>
      <FPLButton variant="filled" transfer>
        Filled
      </FPLButton>
      <FPLButton variant="ghost" transfer>
        Ghost
      </FPLButton>
    </div>
  );
};

export default TransferButtons;
