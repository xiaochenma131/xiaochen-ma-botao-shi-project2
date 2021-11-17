import React from 'react';
import '../../css/Square.css';
import { useDispatch } from 'react-redux';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function PlayerSquare(props) {
    const state = props.state;

    let mark = '';
    if (state === 'hit') {
        mark = <AiOutlineClose />;
    } else if (state === 'miss') {
        mark = <AiOutlineCheck />;
    }

    const dispatch = useDispatch();

    return (<div onClick={() => {
        dispatch(
            {
                type: 'PlayerBoardClick',
                x: props.x,
                y: props.y,
            }
        );

        // ChangeTurn will set the square value back to the previous state
        dispatch(
            {
                type: 'ChangeTurn',
                square: props.state,
            }
        );
    }
    } class={`square ${state}`} >{mark}</div >);
}