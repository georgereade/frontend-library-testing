import "./App.css";
import { themeClass } from "./theme.css.ts";
import MyButton from "./components/Button/Button.tsx";

import * as css from "./components/Button/button.css.ts";
import Alert from "./components/Alert/Alert.tsx";

function App() {
  return (
    <div className={themeClass}>
      <h2>Buttons</h2>
      <div className={css.saveBar}>
        <MyButton className={css.primaryButton}>Primary</MyButton>
        <MyButton className={css.secondaryButton}>Secondary</MyButton>
        <MyButton className={css.tertiaryButton}>Tertiary</MyButton>
      </div>
      <h2>Alerts</h2>
      <div>
        <Alert>Default</Alert>
        <Alert type="error" textAlign="left">
          Error with textAlign left
        </Alert>
        <Alert type="info">Info with isInline</Alert>
        <Alert isInline>Default with isInline</Alert>
        <h3>copnr styles</h3>
        <div className="copnr-row">
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
      </div>
    </div>
  );
}

export default App;
