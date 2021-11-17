import React from 'react';
import '../../css/Square.css';
import { AiOutlineCheck, AiOutlineClose, AiTwotoneCheckCircle } from "react-icons/ai";

// Computer board will have black dots as ship position
export default function ComputerSquare(props) {
    const state = props.state;

    let mark = '';
    if (state === 'hit') {
        mark = <AiOutlineClose />;
    } else if (state === 'miss') {
        mark = <AiOutlineCheck />;
    } else if (state === 'ship') {
        mark = <AiTwotoneCheckCircle />;
    }

    return (<div class={`square ${state}`} >{mark}</div >);
}