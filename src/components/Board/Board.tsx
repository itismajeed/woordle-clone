import { Row } from '../Row/Row'
import { config } from '../../config'

export function Board () {
  return (
    <div className="board">
      {[...Array(config.board.height)].map((row, index) => (
        <Row key={index}/>
      ))}
    </div>
  )
}