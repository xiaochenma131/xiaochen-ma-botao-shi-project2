// Generate a board with ship placed at random positon
export default function GenerateBoard(defaultState, ships) {
    // const randomizedBoard = defaultState; We have no idea why this line doesn't work so we referenced from a friend who worked as a senior front-end engineer.
    const Board = defaultState.map(inner => inner.slice());

    for (let ship of ships) {
        let row = 0;
        let col = 0;
        let direction = Math.floor(Math.random() * 2);
        let block = true;
        while (block) {
            if (direction === 0){
                //Place ship at random position horizontally.
                row = Math.floor(Math.random() * 10);
                col = Math.floor(Math.random() * (10-ship+1));
                block = false;
                for (let i = col; i < col + ship; i++) {
                    if (Board[row][i] === 'ship') {
                        block = true;
                        break;
                    }
                }
                if (!block) {
                    for (let i = col; i < col + ship; i++) {
                        Board[row][i] = 'ship';
                    }
                }
            } else {
                // Place ship at random position vertically.
                row = Math.floor(Math.random() * (10-ship+1));
                col = Math.floor(Math.random() * 10);
                block = false;
                for (let i = row; i < row + ship; i++) {
                    if (Board[i][col] === 'ship') {
                        block = true;
                        break;
                    }
                }
                if (!block) {
                    for (let i = row; i < row + ship; i++) {
                        Board[i][col] = 'ship';
                    }
                }
            }
        }
    }
    return Board;
}