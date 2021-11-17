import '../css/Board.css';
import { useSelector } from 'react-redux';
import PlayerBoard from '../component/player/PlayerBoard';
import PlayerWin from '../component/player/PlayerWin';
import Navbar from '../component/Navbar';
import { Link } from "react-router-dom";
import Reset from '../component/Reset';

// Set a free play board
export default function FreePlayBoard() {
    const PlayerBoardState = useSelector((state) => state.PlayerBoard);

    let playerHitCount = 0
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (PlayerBoardState[i][j] === 'hit') {
                playerHitCount++;
                if (playerHitCount === 17) {
                    return <PlayerWin />;
                }
            }
        }
    }

    return (
        <div class='container'>
            <Navbar />
            <div class="row">
                <span style={{fontSize: "x-large"}}>Free Play Game</span>
                <Link to="/free">
                    <button class="button"><div onClick={{Reset}}>Reset</div></button>
                </Link>            
        </div>
            <PlayerBoard />
        </div>
    )
}