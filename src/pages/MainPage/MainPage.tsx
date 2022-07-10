import './MainPage.css'
import { Board } from '../../components/Board/Board'
import { Keyaboard } from '../../components/Keyboard/Keyaboard'

export function MainPage () {
  return (
    <main className="main-page flex-container-column full-center">
      <div>
        <Board/>
      </div>
      <div>
        <Keyaboard/>
      </div>
    </main>
  )
}