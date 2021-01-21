export default function cocktailReducer(state = {cocktails: [], loading: false}, action) {
    switch (action.type) {
        case("LOADING_COCKTAILS"):
            return{...state, loading: true};
        case("COCKTAILS_LOADED"):
            return{...state, loading: false, cocktails: action.payload};
        case("CREATING_COCKTAIL"):
            return{...state, loading: true};
        case("COCKTAIL_CREATED"):
            return{...state, loading: false, cocktails: [...state.cocktails, action.payload]};
        default:
            return state;
    }
}