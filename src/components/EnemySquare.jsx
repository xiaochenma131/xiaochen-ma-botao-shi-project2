import React from 'react';
import '../css/Square.css';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function EnemySquare(props) {
    const state = props.state;

    let mark;
    if (state === 'hit') {
        mark = <AiOutlineCheck />;
    } else if (state === 'miss') {
        mark = <AiOutlineClose />;
    }

    return (<div class={`square ${state}`} >{mark}</div >);
}