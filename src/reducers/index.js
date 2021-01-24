import { combineReducers } from 'redux';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    cocktailReducer, searchReducer
})

export default rootReducer;