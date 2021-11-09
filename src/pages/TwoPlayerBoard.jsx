import '../css/Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import EnemyBoard from '../components/EnemyBoard'
import MyBoard from '../components/MyBoard';
import PlayerWins from '../components/PlayerWins';
import EnemyWins from '../components/EnemyWins';
import ResetButton from '../components/ResetButton';

export default function TwoPlayerBoard() {
    const myTurnState = useSelector((state) => state.myTurn);
    const enemyBoardState = useSelector((state) => state.enemyBoard);
    const myBoardState = useSelector((state) => state.myBoard);
    const dispatch = useDispatch();

    // This is the same logic with One Player Board
    // Keep checking the number of ship left on the board for both enemy board and my board.
    let countShip = 0;
    for (let i = 0; i < enemyBoardState.length; i++) {
        for (let j = 0; j < enemyBoardState[0].length; j++) {
            if (enemyBoardState[i][j] === 'ship') {
                countShip++;
            }
        }
    }

    // If there is no ship left on the enemy board, enemy wins
    if (countShip === 0) {
        return (
            <EnemyWins />
        )
    }
    countShip = 0;
    for (let i = 0; i < myBoardState.length; i++) {
        for (let j = 0; j < myBoardState[0].length; j++) {
            if (myBoardState[i][j] === 'ship') {
                countShip++;
            }
        }
    }

    // If there is no ship left on my board, the player wins
    if (countShip === 0) {
        return (
            <PlayerWins />
        )
    }

    // AI logic
    if (myTurnState === 0) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (enemyBoardState[x][y] === 'hit' || enemyBoardState[x][y] === 'miss') {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        dispatch(
            {
                type: 'enemyBoardClick',
                x: x,
                y: y,
            }
        );
        dispatch(
            {
                type: 'changeTurn',
                squareStateOfClicked: '', // Hacky to prevent infinite loop
            }
        );
    }

    return (
        <div class='bigContainer'>
            <div class='container'>
                <div class='myContainer'>
                    My Board
                    <MyBoard />
                </div>
                <div class='enemyContainer'>
                    Enemy Board
                    <EnemyBoard />
                </div>
            </div>
            <div class='buttonContainer'><ResetButton /></div>
        </div>
    )
}