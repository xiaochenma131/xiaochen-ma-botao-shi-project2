import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Reset from "./Reset";

// Navbar will not be shown on the home page
export default function Navbar() {
    return (
        <div class="navbar">
            <Link style={{textDecoration: 'none', fontSize: 36, fontWeight: "bold", color: "black"}} to="/"><div onClick={{Reset}}>Battleship Game</div></Link>
            <div class="horizontal">
                <Link style={{textDecoration: 'none', color: "black"}} to="/normal"><div onClick={{Reset}}>Normal Game</div></Link>
                <Link style={{textDecoration: 'none', color: "black"}} to="/free"><div onClick={{Reset}}>Free Play Game</div></Link>
                <Link style={{textDecoration: 'none', color: "black"}} to="/rules"><div onClick={{Reset}}>Rules</div></Link>
            </div>
        </div>
    )
}