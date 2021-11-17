import React from "react";
import "../css/Home.css";
import "../css/Button.css";
import { Link } from "react-router-dom";
import Reset from "../component/Reset";

// Set a home page, no navbar
export default function Home() {
    return (
        <div class="home">
            <span>Battleship Game</span>
            <h4>designed by Xiaochen Ma and Botao Shi</h4>

            <Link to="/normal">
                <button class="button"><div onClick={{Reset}}>Normal Game</div></button>
            </Link>
            <Link to="/free">
                <button class="button"><div onClick={{Reset}}>Free Play Game</div></button>
            </Link>
            <Link to="/rules">
                <button class="button"><div onClick={{Reset}}>Game Rules</div></button>
            </Link>
        </div>
    )
}