import { combineReducers } from 'redux';
import ComputerBoard from './ComputerReducer';
import PlayerBoard from './PlayerReducer';
import ChangeTurn from './ChangeTurnReducer';

export default combineReducers({
    ComputerBoard: ComputerBoard,
    PlayerBoard: PlayerBoard,
    ChangeTurn: ChangeTurn,
})