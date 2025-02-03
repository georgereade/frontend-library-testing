import "./global.css.ts";
import MyButton from "./components/Button/Button.tsx";
import * as styles from "./components/Button/button.css.ts";
import Alert from "./components/Alert/Alert.tsx";
import PlayerModal from "./components/Modal/Modal.tsx";
import { useTheme } from "./context/themeContext.ts";
import { copnrRow } from "./global.css.ts";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div id="app">
      <button onClick={toggleTheme}>Switch Theme</button>
      <h3>Buttons</h3>
      <div className={styles.saveBar}>
        <MyButton className={styles.primaryButton}>Primary</MyButton>
        <MyButton className={styles.secondaryButton}>Secondary</MyButton>
        <MyButton className={styles.tertiaryButton}>Tertiary</MyButton>
      </div>
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
