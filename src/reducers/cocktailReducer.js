export default (state = {cocktails: [], loading: false}, action) => {
    switch (action.type) {
        case("LOADING_COCKTAILS"):
            return{...state, loading: true}
        case("COCKTAILS_LOADED"):
            return{...state, loading: false, cocktails: action.payload}
        default:
            return state
    }
}