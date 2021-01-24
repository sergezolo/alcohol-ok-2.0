export default function searchReducer(state = {query: ""}, action) {
    switch (action.type) {
        case("UPDATE_SEARCH_QUERY"):
            return{...state, query: action.value};
        default:
            return state;
    }
}