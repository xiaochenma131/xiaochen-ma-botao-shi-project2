import '../css/Board.css'
import { useSelector } from 'react-redux';
import MyBoard from '../components/MyBoard';
import PlayerWins from '../components/PlayerWins';
import ResetButton from '../components/ResetButton';

export default function OnePlayerBoard() {
    const myBoardState = useSelector((state) => state.myBoard);

    // Iterate through the board and count the number of ship square left in the board. 
    // If there is no ship square left, 
    // it means that the player has hitted all the ships, 
    // return player wins!
    let countShip = 0
    for (let i = 0; i < myBoardState.length; i++) {
        for (let j = 0; j < myBoardState[0].length; j++) {
            if (myBoardState[i][j] === 'ship') {
                countShip++;
            }
        }
    }

    if (countShip === 0) {
        return <PlayerWins />;
    }

    return (
        <div class='bigContainer'>
            <div class='container'>
                <MyBoard />
            </div>
            <div class='buttonContainer'><ResetButton /></div>
        </div>
    )
}