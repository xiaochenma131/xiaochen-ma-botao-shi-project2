export default function myTurnReducer(
    state = 1, action) {
    if (action.type === 'changeTurn') {
        const value = action.squareStateOfClicked;
        if (value === '' || value === 'ship') {
            state = state === 1 ? 0 : 1;
        }
    }
    if (action.type === 'reset') {
        state = 1;
    }
    return state;
}