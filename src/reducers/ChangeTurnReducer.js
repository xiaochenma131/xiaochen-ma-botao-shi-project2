export default function ChangeTurn(
    state = 0, action) {
    if (action.type === 'ChangeTurn') {
        const value = action.square;
        if (value === 'ship' || value === '') {
            if (state === 0) {
                state = 1;
            } else {
                state = 0;
            }
        }
    }
    return state;
}