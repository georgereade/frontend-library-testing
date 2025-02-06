import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  SortDescriptor,
} from "react-aria-components";
import { useState } from "react";
import * as styles from "./playerTable.css";
import playersData from "./players.json";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  price: number;
}

interface PlayerTableProps {
  selectedPositions: Set<string>;
}

const PlayerTable: React.FC<PlayerTableProps> = ({ selectedPositions }) => {
  const [sortedPlayers, setSortedPlayers] = useState<Player[]>(playersData);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor | null>(
    null
  );

  const handleSort = (descriptor: SortDescriptor) => {
    const sorted = [...sortedPlayers].sort((a, b) => {
      const first = a[descriptor.column as keyof Player];
      const second = b[descriptor.column as keyof Player];

      if (typeof first === "string" && typeof second === "string") {
        return descriptor.direction === "ascending"
          ? first.localeCompare(second)
          : second.localeCompare(first);
      }

      if (typeof first === "number" && typeof second === "number") {
        return descriptor.direction === "ascending"
          ? first - second
          : second - first;
      }

      return 0;
    });

    setSortedPlayers(sorted);
    setSortDescriptor(descriptor);
  };

  const columns = [
    { id: "name", label: "Name" },
    { id: "team", label: "Team" },
    { id: "position", label: "Position" },
    { id: "price", label: "Price" },
  ];

  // 🏆 **Filter players based on selected positions**
  const filteredPlayers =
    selectedPositions.size > 0
      ? sortedPlayers.filter((player) => selectedPositions.has(player.position))
      : sortedPlayers; // If no filters are selected, show all

  return (
    <div className={styles.tableContainer}>
      <Table
        aria-label="Player Table"
        sortDescriptor={sortDescriptor}
        onSortChange={handleSort}
        className={styles.table}
      >
        <TableHeader className={styles.tableHeader}>
          {columns.map(({ id, label }) => (
            <Column
              key={id}
              id={id}
              isRowHeader={id === "name"}
              allowsSorting
              className={styles.tableColumn}
            >
              {label}{" "}
              {sortDescriptor?.column === id &&
                (sortDescriptor.direction === "ascending" ? (
                  <ArrowDownCircleIcon height={"12px"} />
                ) : (
                  <ArrowUpCircleIcon height={"12px"} />
                ))}
            </Column>
          ))}
        </TableHeader>
        <TableBody items={filteredPlayers}>
          {(item: Player) => (
            <Row key={item.id}>
              <Cell>{item.name}</Cell>
              <Cell>{item.team}</Cell>
              <Cell>{item.position}</Cell>
              <Cell>{item.price}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayerTable;
