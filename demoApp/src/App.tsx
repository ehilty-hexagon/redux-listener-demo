import "./App.css"
import { AlertOverlay } from "./features/alertOverlay/AlertOverlay"
import { ConnectedWordList } from "./features/wordList/ConnectedWordList"

const App = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <ConnectedWordList />
      </header>
      <AlertOverlay />
    </div>
  )
}

export default App
