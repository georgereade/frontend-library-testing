import { TagGroup, TagList, Tag, Label } from "react-aria-components";

const PositionSelector = () => {
  return (
    <TagGroup selectionMode="multiple">
      <Label>Positions</Label>
      <TagList>
        <Tag>Goalkeepers</Tag>
        <Tag>Defenders</Tag>
        <Tag>Midfielders</Tag>
        <Tag>Forwards</Tag>
        <Tag>Managers</Tag>
      </TagList>
    </TagGroup>
  );
};

export default PositionSelector;
