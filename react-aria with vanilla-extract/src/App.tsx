import "./global.css.ts";
import * as styles from "./global.css.ts";
import ThemeDropdown from "./components/ThemeDropdown/ThemeDropdown.tsx";
import TransferButtons from "./components/TransferButtons/TransferButtons.tsx";
import PlayerInfoModal from "./components/PlayerInfoModal/PlayerInfoModal.tsx";
import AlertDemos from "./components/AlertDemos/AlertDemos.tsx";
// import PositionSelector from "./components/PositionSelector/PositionSelector.tsx";
// import PlayerTable from "./components/PlayerTable/PlayerTable.tsx";
import PlayerPage from "./components/Players/Players.tsx";

function App() {
  return (
    <div id="app" className={styles.disableFocusRing}>
      <ThemeDropdown />
      <div className={styles.appRow}>
        <div className={styles.appColumn}>
          <h3>Buttons</h3>
          <TransferButtons />
        </div>
        <div className={styles.appColumn}>
          <h3>Alerts</h3>
          <AlertDemos />
        </div>
      </div>
      <div className={styles.appRow}>
        <div className={styles.appColumn}>
          <h3>Tag Group</h3>
          <PlayerPage />
        </div>
        <div className={styles.appColumn}>
          <h3>Modal</h3>
          <PlayerInfoModal />
        </div>
      </div>
    </div>
  );
}

export default App;
