import ComputerSquare from "./ComputerSquare"
import '../../css/Board.css'
import { useSelector } from 'react-redux';

// Set a computer board
export default function ComputerBoard() {
    const boardState = useSelector((state) => state.ComputerBoard);

    const boardComponent = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boardComponent.push((<ComputerSquare state={boardState[i][j]} x={i} y={j} />))
        }
    }

    return (
        <div class='board'>
            {boardComponent}
        </div>
    )
}