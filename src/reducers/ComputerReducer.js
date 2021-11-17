import GenerateBoard from "./BoardReducer";
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

const ships = [2, 3, 3, 4, 5];

export default function ComputerBoard(
    state = GenerateBoard(defaultState, ships), action
) {
    if (action.type === 'ComputerBoardClick') {
        const value = state[action.x][action.y];
        if (value === 'ship') {
            state[action.x][action.y] = 'hit';
        } else if (value === '') {
            state[action.x][action.y] = 'miss';
        }
        return [...state];
    } else if (action.type === 'reset') {
        state = GenerateBoard(defaultState, ships);
        return [...state];
    }
    return state;
}