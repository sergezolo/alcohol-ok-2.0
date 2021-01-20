import React, { Component } from 'react';
import IngredientForm from './IngredientForm';
import InstructionForm from './InstructionForm';

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

    handleChange = event => {

    }


    render() {
        // let { name, img_url, description, instructions, ingredients } = this.state
        let { ingredients } = this.state
        return (
            <div className="grid-container">
                <div className="item1">
                    <h3>Add a new cocktail:</h3>
                    <input type="text" name="name" id="name" placeholder="Name"/><br/><br/>
                    <input type="text" name="imgUrl" id="imgUrl" placeholder="Image URL"/>
                </div>
                <div className="item2">
                    <h5>Ingredients:</h5><br/>
                    <IngredientForm ingredients={ingredients} handleChange={this.handleChange}/>
                </div>
                <div className="item3">
                    <h5>Instructions:</h5><br/>
                    <InstructionForm ingredients={ingredients} handleChange={this.handleChange}/>
                </div>
                <div className="item4"><br/>
                    <input type="text-lg"/><br/>
                    <input className="buttonPr" type="submit"/>
                </div>
            </div>
        )
    }
}

export default CocktailForm
