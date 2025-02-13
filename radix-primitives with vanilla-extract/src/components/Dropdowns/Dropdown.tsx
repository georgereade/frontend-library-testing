import * as React from "react";
import { DropdownMenu } from "radix-ui";
import * as styles from "./dropdown.css";

const positions = [
  { id: "Goalkeeper", name: "Goalkeepers" },
  { id: "Defender", name: "Defenders" },
  { id: "Midfielder", name: "Midfielders" },
  { id: "Forward", name: "Forwards" },
  { id: "Manager", name: "Managers" },
];

const DropdownMenuDemo = () => {
  const [selectedPositions, setSelectedPositions] = React.useState<Set<string>>(
    new Set()
  );

  const handleCheckedChange = (position: string, checked: boolean) => {
    setSelectedPositions((prevSelectedPositions) => {
      const newSelectedPositions = new Set(prevSelectedPositions);
      if (checked) {
        newSelectedPositions.add(position);
      } else {
        newSelectedPositions.delete(position);
      }
      return newSelectedPositions;
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.button} aria-label="Customise options">
          Label
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5}>
          {positions.map(({ id, name }) => (
            <DropdownMenu.CheckboxItem
              key={id}
              className={styles.DropdownMenuCheckboxItem}
              checked={selectedPositions.has(id)}
              onCheckedChange={(checked) => handleCheckedChange(id, checked)}
            >
              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                ✔
              </DropdownMenu.ItemIndicator>
              {name}
            </DropdownMenu.CheckboxItem>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
