import "./global.css.ts";
import Alert from "./components/Alert/Alert.tsx";
import PlayerModal from "./components/Modal/Modal.tsx";
import { copnrRow } from "./global.css.ts";
import ThemeDropdown from "./components/ThemeDropdown/ThemeDropdown.tsx";
import TransferButtons from "./components/TransferButtons/TransferButtons.tsx";

function App() {
  return (
    <div id="app">
      <h3>Buttons</h3>
      <ThemeDropdown />
      <TransferButtons />
      <h3>Alerts</h3>
      <div>
        <Alert>Default</Alert>
        <Alert type="error" textAlign="left">
          Error with textAlign left
        </Alert>
        <Alert type="info">Info with isInline</Alert>
        <Alert isInline>Default with isInline</Alert>
        <h3>copnr styles</h3>
        <div className={copnrRow}>
          <Alert copnr={null}>Null</Alert>
          <Alert type="news" copnr={0}>
            0%
          </Alert>
          <Alert type="news" copnr={25}>
            25%
          </Alert>
          <Alert type="news" copnr={50}>
            50%
          </Alert>
          <Alert type="news" copnr={75}>
            75%
          </Alert>
        </div>
        <PlayerModal />
      </div>
    </div>
  );
}

export default App;
