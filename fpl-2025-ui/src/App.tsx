import "./App.css";
import { themeClass } from "./theme.css.ts";
import MyButton from "./components/Button/Button.tsx";

import * as css from "./components/Button/styles.css.ts";

function App() {
  return (
    <div className={themeClass}>
      <h1>Buttons</h1>
      <div className={css.saveBar}>
        <MyButton className={css.primaryButton}>Primary</MyButton>
        <MyButton className={css.secondaryButton}>Secondary</MyButton>
        <MyButton className={css.tertiaryButton}>Tertiary</MyButton>
      </div>
      <h1>Fixtures</h1>
    </div>
  );
}

export default App;
