import { config } from '../../config'
import { Letter } from '../Letter/Letter'
import { LetterStatus } from '../Letter/letter.status'
import './Row.css'

export function Row () {
  return (
    <>
      <div className="flex-container-row row justify-content-center full-with">
        {[...Array(config.board.width)].map((item, index) => (
          <Letter status={LetterStatus.SemiCorrect} letter={"S"} x={index} y={0}/>
        ))}
      </div>
    </>
  )
}