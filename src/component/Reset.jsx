import React from 'react';
import { useDispatch } from 'react-redux';

// Too many codes if call dispatch type === reset when needed, so make a function
export default function Reset() {

    const dispatch = useDispatch();

    return (<link onClick={() => {
        dispatch(
            {
                type: 'reset',
            }
        );
    }
    } class='reset'></link >);
}