// action object creator function

export const getIngredients = () => {
    return dispatch => {
        dispatch({type: "LOADING_INGREDIENTS"})
        fetch("http://localhost:3001/ingredients")
        .then(response => response.json())
        .then(ingredients => dispatch({type: "INGREDIENTS_LOADED", payload: ingredients}))
    }
}