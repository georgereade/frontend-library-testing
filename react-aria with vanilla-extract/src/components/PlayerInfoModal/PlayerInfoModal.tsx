import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import * as styles from "./modal.css.ts";

const PlayerInfoModal = () => {
  return (
    <DialogTrigger>
      <Button className={styles.button}>Show Player Info</Button>
      <ModalOverlay className={styles.overlay}>
        <Modal isDismissable className={styles.modal}>
          <Dialog>
            <Heading slot="title">Player Info</Heading>
            <p>This is a modal with a custom modal overlay.</p>
            <Button slot="close">Close</Button>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default PlayerInfoModal;
