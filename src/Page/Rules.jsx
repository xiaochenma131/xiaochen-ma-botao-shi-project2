import React from "react";
import "../css/Rules.css"
import Navbar from '../component/Navbar';


// Set rules page
export default function Rules(){
    return(
        <div id="rules">
            <Navbar />
            <h1>Games Rules</h1>

            <ul>
            <li>You are going to play a simple battleship game on a 10x10 board</li>
            <li>There are two game modes: Normal and Free Play</li>
            <li>For a Normal Game, you will play against a computer and you will always play first.</li>
            <li>You need to select a square on the computer's board</li>
            <li>And then the computer will also select a square on your board</li>
            <li>If you or the computer hit a ship, that square will be marked in green</li>
            <li>But, if you or the computer miss, that square will be marked in red</li>
            <li>You and the computer will not be able to hit a square more than once</li>
            <li>For a Free Play Game, you are the only player</li>
            </ul>
        </div>
    )
}