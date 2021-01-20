import React from 'react';

const IngredientForm = ({ ingredients, handleChange }) => {
    return (
        ingredients.map((value, index) => {
            let ingredientId = `name-${index}`, quantityId = `quantity-${index}`
            return (
                <div key={index}>
                    <input className="input-2" type="text" name={ingredientId} placeholder="Ingredient" value={ingredients[index].name}/>
                    
                    <input className="input-3" type="text" name={quantityId} placeholder="Quantity" value={ingredients[index].quantity}/>
                </div>
            )
        })
    )
}

export default IngredientForm;