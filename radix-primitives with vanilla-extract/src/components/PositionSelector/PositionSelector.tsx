import { TagGroup, TagList, Tag, Label } from "react-aria-components";
import * as styles from "./positionSelector.css";
import { XCircle } from "lucide-react";
import DropdownMenuDemo from "../Dropdowns/Dropdown";

const positions = [
  { id: "Goalkeeper", name: "Goalkeepers" },
  { id: "Defender", name: "Defenders" },
  { id: "Midfielder", name: "Midfielders" },
  { id: "Forward", name: "Forwards" },
  { id: "Manager", name: "Managers" },
];

interface PositionSelectorProps {
  selectedPositions: Set<string>;
  setSelectedPositions: (positions: Set<string>) => void;
}

const PositionSelector: React.FC<PositionSelectorProps> = ({
  selectedPositions,
  setSelectedPositions,
}) => {
  const handleSelectionChange = (keys: Set<string>) => {
    setSelectedPositions(keys);
  };

  return (
    <TagGroup
      selectionMode="multiple"
      selectedKeys={selectedPositions}
      onSelectionChange={handleSelectionChange}
      className={styles.tagGroup}
    >
      <Label>Filter Positions</Label>
      <TagList className={styles.tagList}>
        {positions.map(({ id, name }) => (
          <Tag key={id} id={id} className={styles.tag}>
            {(props: { isSelected: boolean }) => (
              <>
                {name}
                {props.isSelected && <XCircle className={styles.cross} />}
              </>
            )}
          </Tag>
        ))}
      </TagList>
      <p>
        Currently showing:{" "}
        {selectedPositions.size === 0
          ? "All"
          : [...selectedPositions]
              .map((id) => positions.find((p) => p.id === id)?.name)
              .join(", ")}
      </p>
      <DropdownMenuDemo />
    </TagGroup>
  );
};

export default PositionSelector;
