import React, { Component } from 'react'

export class CocktailForm extends Component {

    state = {
        name: "",
        description: "",
        img_url: "",
        instructions: [],
        ingredients: [
            {
                name: "",
                quantity: ""
            }
        ]
    }


    render() {
        return (
            <form>
                <h3>Add a new cocktail:</h3>
                <input type="text" name="name" id="name" placeholder="Name"/><br/>
                <input type="text" name="imgUrl" id="imgUrl" placeholder="Image URL"/>

                
            </form>
        )
    }
}

export default CocktailForm
