// action object creator function

export const updateSearchQuery = (value) => {
    return dispatch => {
        dispatch({type: "UPDATE_SEARCH_QUERY", value})
    }
}

export const clearSearchQuery = () => {
    return dispatch => {
        dispatch({type: "CLEAR_SEARCH_QUERY"})
    }
}