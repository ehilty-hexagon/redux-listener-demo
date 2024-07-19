import { AlertOverlay } from "./features/alertOverlay/AlertOverlay"
import styles from "./App.module.css";
import { ConnectedControls } from "./features/wordList/Controls";
import { ConnectedDisplay } from "./features/wordList/Display";

const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <ConnectedControls />
        <div className={styles.displays}>
          <ConnectedDisplay heading="Unsorted :(" />
          <ConnectedDisplay sorted heading="Sorted :)" />
        </div>
      </main>
      <AlertOverlay />
    </div>
  )
}

export default App
