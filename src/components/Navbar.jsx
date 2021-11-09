import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
    return (
        <div class="navbarContainer">
            <Link exact to="/">Home Page</Link>
            <Link exact to="/freeplay">Free Play</Link>
            <Link exact to="/normalplay">Normal Game</Link>
            <Link exact to="/rules">Rules</Link>
        </div>
    )
}