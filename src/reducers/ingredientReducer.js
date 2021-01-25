export default function ingredientReducer(state = {ingredients: [], loading: false}, action) {
    switch (action.type) {
        case("LOADING_INGREDIENTS"):
            return{...state, loading: true};
        case("INGREDIENTS_LOADED"):
            return{...state, loading: false, cocktails: action.payload};
        default:
            return state;
    }
}