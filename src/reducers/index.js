import { combineReducers } from 'redux';
import cocktailReducer from './cocktailReducer';
import searchReducer from './searchReducer';
import ingredientReducer from './ingredientReducer';

const rootReducer = combineReducers({
    cocktailReducer, 
    searchReducer, 
    ingredientReducer,
})

export default rootReducer;