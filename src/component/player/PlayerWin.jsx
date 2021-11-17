import '../../css/GameOver.css';
import "../../css/Button.css";
import { Link } from "react-router-dom";

export default function PlayerWin() {
    return (
        <div class='GameOver'>
            <h1>You Win!</h1>
            <Link to="/">
                <button class="button">Back to Home</button>
            </Link>
        </div>
    )
}