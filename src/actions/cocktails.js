// action object creator function

export const getCocktails = () => {
    return dispatch => {
        dispatch({type: "LOADING_COCKTAILS"})
        fetch("http://localhost:3001/cocktails")
        .then(response => response.json())
        .then(cocktails => dispatch({type: "COCKTAILS_LOADED", payload: cocktails}))
    }
}

export const createCocktail = (cocktail) => {
    return dispatch => {
        dispatch({type: "CREATING_COCKTAIL"})
        fetch("http://localhost:3001/cocktails", {
            method: "POST",
            body: JSON.stringify(cocktail),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(cocktail => dispatch({type: "COCKTAIL_CREATED", payload: cocktail}))
    }
}