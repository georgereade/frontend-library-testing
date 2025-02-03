import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import * as styles from "./modal.css"; // Import Vanilla Extract styles

const PlayerModal = () => {
  return (
    <DialogTrigger>
      <Button>Open modal</Button>
      <ModalOverlay className={styles.overlay}>
        <Modal className={styles.modal}>
          <Dialog>
            <Heading slot="title">Player</Heading>
            <p>This is a modal with a custom modal overlay.</p>
            <Button slot="close">Close</Button>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default PlayerModal;
