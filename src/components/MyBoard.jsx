import MySquare from "./MySquare"
import '../css/Board.css'
import { useSelector } from 'react-redux';

export default function MyBoard() {
    const boardState = useSelector((state) => state.myBoard);

    const boardComponent = [];

    for (let i = 0; i < boardState.length; i++) {
        for (let j = 0; j < boardState[0].length; j++) {
            boardComponent.push((<MySquare state={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div class="board">
            {boardComponent}
        </div>
    )
}