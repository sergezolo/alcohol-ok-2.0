// action object creator function

export const getCocktails = () => {
    return dispatch => {
        dispatch({type: "LOADING_COCKTAILS"})
        fetch("/cocktails")
        .then(response => response.json())
        .then(cocktails => dispatch({type: "COCKTAILS_LOADED", payload: cocktails}))
    }
}