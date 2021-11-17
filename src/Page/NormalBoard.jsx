import '../css/Board.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ComputerBoard from '../component/computer/ComputerBoard';
import ComputerWin from '../component/computer/ComputerWin';
import PlayerBoard from '../component/player/PlayerBoard';
import PlayerWin from '../component/player/PlayerWin';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
import Reset from '../component/Reset';


// Set a normal board
export default function NormalBoard() {
    const ComputerBoardState = useSelector((state) => state.ComputerBoard);
    const PlayerBoardState = useSelector((state) => state.PlayerBoard);
    const ChangeTurnState = useSelector((state) => state.ChangeTurn);
    const dispatch = useDispatch();

    let playerHitCount = 0;
    let computerHitCount = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (PlayerBoardState[i][j] === 'hit') {
                playerHitCount ++;
                if (playerHitCount === 17) {
                    return (
                        <PlayerWin />
                    )
                }
            }
            if (ComputerBoardState[i][j] === 'hit') {
                computerHitCount++;
                if (computerHitCount === 17) {
                    return (
                        <ComputerWin />
                    )
                }
            } 
        }
    }

    if (ChangeTurnState === 1) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        while (ComputerBoardState[x][y] === 'hit' || ComputerBoardState[x][y] === 'miss') {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        dispatch(
            {
                type: 'ComputerBoardClick',
                x: x,
                y: y,
            }
        );
        dispatch(
            {
                type: 'ChangeTurn',
                square: '', 
            }
        );
    }

    return (
            <div class='container'>
                <Navbar />
                <div class="row">
                    <span style={{fontSize: "x-large"}}>Normal Game (You need to play on this board)</span>
                    <Link to="/normal">
                        <button class="button"><div onClick={{Reset}}>Reset</div></button>
                    </Link>     
                </div>
                <PlayerBoard />
                <div class="row">
                    <span style={{fontSize: "x-large"}}>The computer will play on this board</span>
                </div>
                <ComputerBoard />
            </div>
    )
}