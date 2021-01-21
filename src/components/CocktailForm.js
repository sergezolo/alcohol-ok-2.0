import React, { Component } from 'react';
import IngredientForm from './IngredientForm';
import InstructionForm from './InstructionForm';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export class CocktailForm extends Component {

    state = {
        name: "",
        description: "",
        img_url: "",
        instructions: [""],
        ingredients: [
            {
                name: "",
                quantity: "",
            }
        ]
    }

    handleChangeInstruction = (index, value) => {
        this.setState({
            ...this.state,
            instructions: [
                ...this.state.instructions.slice(0, index),
                value, 
                ...this.state.instructions.slice(index + 1),
            ]
        })
    }

    handleChangeIngredientName = (index, value) => {
        console.log(index, value, this.state)
        this.setState({
            ...this.state,
            ingredients: [
                ...this.state.ingredients.slice(0, index),
                {
                    name: value,
                    quantity: this.state.ingredients[index].quantity
                }, 
                ...this.state.ingredients.slice(index + 1),
            ]
        })
    }

    handleChangeIngredientQuantity = (index, value) => {
        this.setState({
            ...this.state,
            ingredients: [
                ...this.state.ingredients.slice(0, index),
                {
                    name: this.state.ingredients[index].name,
                    quantity: value
                },
                ...this.state.ingredients.slice(index + 1),
            ]
        })
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
            
            instructions: [...prevState.instructions, ""]
        }))
        console.log(this.state)
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
                    <IngredientForm ingredients={ingredients} handleChangeName={this.handleChangeIngredientName} handleChangeQuantity={this.handleChangeIngredientQuantity}/><br/>
                    <AddCircleIcon className="buttonPrim" onClick={this.addIngredient}/>
                </div>
                <div className="item3">
                    <h5>Instructions:</h5>
                    <InstructionForm instructions={instructions} handleChange={this.handleChangeInstruction}/><br/>
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
