const shipLengths = [5, 4, 3, 3, 2];

const defaultState = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
];

function randomizeBoard(emptyArray, shipsArray) {
    const randomizedBoard = emptyArray.map(inner => inner.slice());

    for (let shipLength of shipsArray) {
        let row = Math.floor(Math.random() * 10);
        let col = Math.floor(Math.random() * 10);
        const BOUNDARY = 10;
        let boundaryFlag = 1;
        while (boundaryFlag === 1) {
            boundaryFlag = 0;
            for (let i = col; i < col + shipLength; i++) {
                if (i === BOUNDARY || randomizedBoard[row][i] === 'ship') {
                    boundaryFlag = 1;
                    break;
                }
            }
            if (boundaryFlag === 0) {
                break;
            }
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        }

        randomizedBoard[row].fill('ship', col, col + shipLength);
    }
    return randomizedBoard;
}

export default function myBoardReducer(
    state = randomizeBoard(defaultState, shipLengths), action
) {
    if (action.type === 'myBoardClick') {
        const value = state[action.x][action.y];
        if (value === '') {
            state[action.x][action.y] = 'miss';
        } else if (value === 'ship') {
            state[action.x][action.y] = 'hit';
        }
        return [...state];
    }
    if (action.type === 'reset') {
        state = randomizeBoard(defaultState, shipLengths);
        return [...state];
    }
    return state;
}