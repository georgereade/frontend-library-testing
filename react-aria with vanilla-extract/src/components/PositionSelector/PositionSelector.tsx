import { TagGroup, TagList, Tag, Label } from "react-aria-components";
import * as styles from "./positionSelector.css";
import { useState } from "react";
import { XCircle } from "lucide-react";

const positions = [
  { id: 1, name: "Goalkeepers" },
  { id: 2, name: "Defenders" },
  { id: 3, name: "Midfielders" },
  { id: 4, name: "Forwards" },
  { id: 5, name: "Managers" },
];

const PositionSelector = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const handleSelectionChange = (keys: Set<string>) => {
    // Convert Set<string> to Set<number>
    setSelected(new Set([...keys].map(Number)));
  };

  return (
    <TagGroup
      selectionMode="multiple"
      selectedKeys={new Set([...selected].map(String))} // Convert numbers back to strings
      onSelectionChange={handleSelectionChange}
      className={styles.tagGroup}
    >
      <Label>Filter Positions</Label>
      <TagList className={styles.tagList}>
        {positions.map((position) => (
          <Tag
            key={position.id}
            id={position.id.toString()}
            className={styles.tag}
          >
            {(props: { isSelected: boolean }) => (
              <>
                {position.name}
                {props.isSelected && <XCircle className={styles.cross} />}
              </>
            )}
          </Tag>
        ))}
      </TagList>
      <p>
        Currently showing:{" "}
        {selected.size === 0
          ? "None"
          : [...selected]
              .map((id) => positions.find((p) => p.id === id)?.name)
              .join(", ")}
      </p>
    </TagGroup>
  );
};

export default PositionSelector;
