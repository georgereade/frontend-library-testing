import { Dialog } from "radix-ui";
import * as styles from "./modal.css.ts";
import Button from "../Button/Button.tsx";
import { useState } from "react";
import { XCircle } from "lucide-react";

const PlayerInfoModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost">Show Player Info</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content className={styles.dialog}>
            <Dialog.Close className={styles.closeButton}>
              <XCircle />
            </Dialog.Close>
            <Dialog.Title slot="title">Player Info</Dialog.Title>
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PlayerInfoModal;
