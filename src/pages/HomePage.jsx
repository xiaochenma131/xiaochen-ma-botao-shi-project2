import React from "react";
import "../css/Button.css";
import { Link } from "react-router-dom";
import "../css/HomePage.css";


export default function HomePage() {
    return (
        <div class="homePageContainer">
            <Link exact to="/freeplay">
                <button class="linkButton">Free Play</button>
            </Link>
            <Link exact to="/normalplay">
                <button class="linkButton">Normal Game</button>
            </Link>
        </div>
    )
}