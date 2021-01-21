import React from 'react';

const IngredientForm = ({ ingredients, handleChangeName, handleChangeQuantity }) => {
    return (
        ingredients.map((value, index) => {
            return (
                <div key={index}>
                    <input className="input-2" type="text" name={`ingredient-name-${index}`} placeholder="Ingredient" value={value.name} onChange={(event) => handleChangeName(index, event.target.value)}/>
                    -
                    <input className="input-3" type="text" name={`ingredient-quantity-${index}`} placeholder="Quantity" value={value.quantity} onChange={(event) => handleChangeQuantity(index, event.target.value)}/>
                </div>
            )
        })
    )
}

export default IngredientForm;