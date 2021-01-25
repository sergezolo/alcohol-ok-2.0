import React from 'react';

const Ingredients = (props) => {

    const { ingredients, loading } = props

    console.log(ingredients)

    return (
        <div>
            hey
             {/* {loading ? <h3>Loading...</h3> : ingredients.map(ingredient => <li key={ingredient.id}>{ingredient.name}</li>)} */}
        </div>
    )
}

export default Ingredients;