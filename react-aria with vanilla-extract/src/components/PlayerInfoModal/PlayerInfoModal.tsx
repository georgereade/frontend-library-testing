import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import * as styles from "./modal.css.ts";
import Button from "../Button/Button.tsx";
import { useRef } from "react";
import { XCircle } from "lucide-react";

const PlayerInfoModal = () => {
  const ref = useRef();

  return (
    <DialogTrigger>
      <Button variant="ghost">Show Player Info</Button>
      <ModalOverlay isDismissable className={styles.overlay}>
        <Modal className={styles.modal} isFocusVisible={false}>
          <Dialog
            className={styles.dialog}
            isFocusVisible={false}
            ref={ref}
            unstable_initialFocusRef={ref}
          >
            <Button slot="close" className={styles.closeButton}>
              <XCircle />
            </Button>
            <Heading slot="title">Player Info</Heading>
            <p>
              This is a modal for showing player info and managing your team.
            </p>
            <p>Click outside the modal to dismiss.</p>
            <div className={styles.buttonRow}>
              <Button variant="filled" fullWidth>
                Full Profile
              </Button>
              <Button variant="ghost" fullWidth>
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
