import "./global.css.ts";
import { disableFocusRing } from "./global.css.ts";
import ThemeDropdown from "./components/ThemeDropdown/ThemeDropdown.tsx";
import TransferButtons from "./components/TransferButtons/TransferButtons.tsx";
import PlayerInfoModal from "./components/PlayerInfoModal/PlayerInfoModal.tsx";
import AlertDemos from "./components/AlertDemos/AlertDemos.tsx";

function App() {
  return (
    <div id="app" className={disableFocusRing}>
      <ThemeDropdown />
      <h3>Buttons</h3>
      <TransferButtons />
      <h3>Alerts</h3>
      <AlertDemos />
      <PlayerInfoModal />
    </div>
  );
}

export default App;
