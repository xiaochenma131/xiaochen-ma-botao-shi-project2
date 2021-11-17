import PlayerSquare from "./PlayerSquare"
import '../../css/Board.css'
import { useSelector } from 'react-redux';


// Set a player board
export default function PlayerBoard() {
    const boardState = useSelector((state) => state.PlayerBoard);

    const boardComponent = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<PlayerSquare state={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div class="board">
            {boardComponent}
        </div>
    )
}