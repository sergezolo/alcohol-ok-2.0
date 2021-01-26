import React from 'react';
import { withRouter } from 'react-router-dom';
import { deleteCocktail } from '../actions/cocktails';
import { connect } from 'react-redux';

const Cocktail = (props) => {

const {cocktails, history, match} = props;

const cocktail = cocktails.find(cocktail => cocktail.id === +match.params.id)

if (!cocktail) {return(<section><h3>Cocktail doesn't exist!</h3></section>)}

const handleDelete = (cocktailId) => {
    props.deleteCocktail(cocktailId)
    history.push('/cocktails')
}

    return (
        <div className="grid-container ">
            <div className="item1"><h2>{cocktail.name}</h2></div>
            <div className="item2"><img className="cocktail-img" alt="" src={cocktail.img_url.length < 5 ? "https://image.freepik.com/free-photo/empty-glasses-drinks_93675-80465.jpg" :cocktail.img_url}/></div>
            <div className="item3">
                <div className="ingredients">
                    <h5>Ingredients:</h5>
                    {cocktail.ingredients.map((ingredient, index) => <li className="li-left-m" key={ingredient.id}>{cocktail.cocktail_ingredients[index].quantity} {ingredient.name}</li>)}
                </div>
                <div className="instructions">
                    <h5>Instructions:</h5>
                    {cocktail.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                </div>
            </div>
            <div className="item4">
                <p>{cocktail.description}</p>
            </div>
            <div className="item1">
                 <button className="buttonPr" onClick={() => handleDelete(cocktail.id)}>Delete Cocktail</button><br/><br/>
            </div>
           
   
        </div>
    )
}

export default withRouter(connect(null, { deleteCocktail })(Cocktail));