import { useState } from "react";
import PlayerTable from "../PlayerTable/PlayerTable";
import PositionSelector from "../PositionSelector/PositionSelector";

const PlayerPage = () => {
  const [selectedPositions, setSelectedPositions] = useState<Set<string>>(
    new Set()
  );

  return (
    <div>
      <PositionSelector
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
      <PlayerTable selectedPositions={selectedPositions} />
    </div>
  );
};

export default PlayerPage;
