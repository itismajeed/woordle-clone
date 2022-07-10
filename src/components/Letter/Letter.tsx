import { LetterStatus } from './letter.status'
import './Letter.css'

export interface LetterSpecs {
  status: LetterStatus,
  x: number,
  y: number,
  letter?: string
}

const statusClasses = {
  [LetterStatus.Empty]: 'letter letter-empty',
  [LetterStatus.Correct]: 'letter letter-correct',
  [LetterStatus.Absent]: 'letter letter-absent',
  [LetterStatus.SemiCorrect]: 'letter letter-semi-correct',
}

function getLetterClasses (status: LetterStatus) {
  return statusClasses[status]
}

export function Letter (props: LetterSpecs) {
  return (
    <div className={getLetterClasses(props.status)}>
      {props.letter}
    </div>
  )
}