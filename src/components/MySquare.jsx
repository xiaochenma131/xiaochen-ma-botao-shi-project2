import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/Square.css';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function MySquare(props) {
    const state = props.state;

    let mark;
    if (state === 'hit') {
        mark = <AiOutlineCheck />;
    } else if (state === 'miss') {
        mark = <AiOutlineClose />;
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch(
            {
                type: 'myBoardClick',
                x: props.x,
                y: props.y,
            }
        );
        dispatch(
            {
                type: 'changeTurn',
                squareStateOfClicked: state,
            }
        );
    }
    } class={`square ${state}`} >{mark}</div >);
}