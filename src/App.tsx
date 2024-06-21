import "./App.css"
import { AlertOverlay } from "./features/alertOverlay/AlertOverlay"
import { WordList } from "./features/wordList/WordList"

const App = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <WordList />
      </header>
      <AlertOverlay />
    </div>
  )
}

export default App
