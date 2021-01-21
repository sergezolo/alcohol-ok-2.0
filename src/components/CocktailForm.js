import React, { Component } from 'react';
import IngredientForm from './IngredientForm';
import InstructionForm from './InstructionForm';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

    handleSubmit = event => {

    }

    addIngredient = event => {
        event.preventDefault();
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name: "", quantity: ""}]
        }))
    }

    addInstruction = event => {
        event.preventDefault();
        this.setState((prevState) => ({
            instructions: [...prevState.instructions, [""]]
        }))
    }

    render() {
        // let { name, img_url, description, instructions, ingredients } = this.state
        let { instructions, ingredients } = this.state
        return (
            <div className="grid-container">
                <div className="item1">
                    <h3>Add a new cocktail:</h3>
                    <input type="text" name="name" id="name" placeholder="Name"/><br/><br/>
                    <input type="text" name="imgUrl" id="imgUrl" placeholder="Image URL"/>
                </div>
                <div className="item2">
                    <h5>Ingredients:</h5>
                    <IngredientForm ingredients={ingredients} handleChange={this.handleChange}/><br/>
                    <AddCircleIcon className="buttonPrim" onClick={this.addIngredient}/>
                </div>
                <div className="item3">
                    <h5>Instructions:</h5>
                    <InstructionForm instructions={instructions} handleChange={this.handleChange}/><br/>
                    <AddCircleIcon className="buttonPrim" onClick={this.addInstruction}/>
                </div>
                <div className="item4"><br/>
                    <h5>Description:</h5>
                    <input className="input-4" type="text"/><br/><br/>
                    <input className="buttonPr" type="submit"/><br/><br/>
                </div>
            </div>
        )
    }
}

export default CocktailForm
