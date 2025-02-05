import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import * as styles from "./modal.css.ts";
import Button from "../Button/Button.tsx";
import PositionSelector from "../PositionSelector/PositionSelector.tsx";

const PlayerInfoModal = () => {
  return (
    <DialogTrigger>
      <Button className={styles.button}>Show Player Info</Button>
      <ModalOverlay isDismissable className={styles.overlay}>
        <Modal className={styles.modal} isFocusVisible={false}>
          <Dialog className={styles.dialog} isFocusVisible={false}>
            <Heading slot="title">Player Info</Heading>
            <p>This is a modal with a custom modal overlay.</p>
            <PositionSelector />
            <div className={styles.buttonRow}>
              <Button buttonVariant={"filled"} fullWidth>
                Full Profile
              </Button>
              <Button buttonVariant={"empty"} fullWidth>
                Substitute
              </Button>
            </div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default PlayerInfoModal;
