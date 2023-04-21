import styles from './App.module.css'
import ChooseAndPlay from './components/ChooseAndPlay'
import ScoreAndResults from './components/ScoreAndResults'

function App() {

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>Rock, Paper, Scissors</h1>
        <p>React TypeScript Game!</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  )
}

export default App
