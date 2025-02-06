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
import { useRef } from "react";

const PlayerInfoModal = () => {
  const ref = useRef();

  return (
    <DialogTrigger>
      <Button className={styles.button}>Show Player Info</Button>
      <ModalOverlay isDismissable className={styles.overlay}>
        <Modal className={styles.modal} isFocusVisible={false}>
          <Dialog
            className={styles.dialog}
            isFocusVisible={false}
            ref={ref}
            unstable_initialFocusRef={ref}
          >
            <Heading slot="title">Player Info</Heading>
            <p>This is a modal with a custom modal overlay.</p>
            <PositionSelector />
            <div className={styles.buttonRow}>
              <Button variant={"filled"} fullWidth>
                Full Profile
              </Button>
              <Button variant={"ghost"} fullWidth>
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
