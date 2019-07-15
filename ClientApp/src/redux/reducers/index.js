import { combineReducers } from 'redux';
import candidates from './candidateReducer';


const rootReducer = combineReducers({
    candidates: candidates
});

export default rootReducer;