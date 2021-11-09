import { combineReducers } from 'redux';
import myBoardReducer from './myBoardReducer';
import enemyBoardReducer from './enemyBoardReducer';
import myTurnReducer from './myTurnReducer';

export default combineReducers({
    enemyBoard: enemyBoardReducer,
    myBoard: myBoardReducer,
    myTurn: myTurnReducer,
})