// action object creator function

export const getCocktails = () => {
    return dispatch => {
        dispatch({type: "LOADING_COCKTAILS"})
        fetch("http://localhost:3001/cocktails")
        .then(response => response.json())
        .then(cocktails => dispatch({type: "COCKTAILS_LOADED", payload: cocktails}))
    }
}