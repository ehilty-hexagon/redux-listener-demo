import "./App.css"
import { WordList } from "./features/wordList/WordList"

const App = () => {
  return (
    <div className="app">
      <header className="appHeader">
        <WordList />
      </header>
    </div>
  )
}

export default App
