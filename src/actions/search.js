// action object creator function

export const updateSearchQuery = (value) => {
    return dispatch => {
        dispatch({type: "UPDATE_SEARCH_QUERY", value})
    }
}