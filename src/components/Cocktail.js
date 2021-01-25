import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Cocktail = (props) => {

const {cocktails, history, match} = props;

const cocktail = cocktails.find(cocktail => cocktail.id === +match.params.id)

if (!cocktail) {return(<section><h3>Cocktail doesn't exist!</h3></section>)}

    return (
        <div className="grid-container ">
            <div className="item1"><h2>{cocktail.name}</h2></div>
            <div className="item2"><img className="cocktail-img" src={cocktail.img_url.length < 5 ? "https://image.freepik.com/free-photo/empty-glasses-drinks_93675-80465.jpg" :cocktail.img_url}/></div>
            <div className="item3">
                <div className="ingredients">
                    <h5>Ingredients:</h5>
                    <div className="grid-container-sm">
                        <div className="item1-sm">
                            {cocktail.ingredients.map((ingredient) => <li className="li-left-m" key={ingredient.id}>{ingredient.name}</li>)}
                        </div>
                        <div className="item2-sm">
                                {cocktail.cocktail_ingredients.map((c_ingredient) => <li className="li-left" key={c_ingredient}>{c_ingredient.quantity} </li>)}
                        </div>
                    </div>
                </div>
                <div className="instructions">
                    <h5>Instructions:</h5>
                    {cocktail.instructions.map((step) => <li key={step.id}>{step}</li>)}
                </div>
            </div>
            <div className="item4">
                <p>{cocktail.description}</p>
            </div>
            <Link to={'/cocktail'} className="buttonPr">Edit Cocktail</Link>
            <Link to={'/cocktail'} className="buttonPr">Delete Cocktail</Link><br/>
        </div>
    )
}

export default withRouter(Cocktail);