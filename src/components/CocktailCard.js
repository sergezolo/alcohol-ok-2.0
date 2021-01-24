import React from 'react';
import './CocktailCard.css';
import { Link } from 'react-router-dom';

const CocktailCard = (props) => {
    const { cocktail } = props;
    return (
        <div className="cocktail" id={cocktail.id}>
            <div className="cocktail-image">
                <img src={cocktail.img_url.length < 5 ? "https://image.freepik.com/free-photo/empty-glasses-drinks_93675-80465.jpg" :cocktail.img_url} alt=""/>
            </div>
            <Link to={`/${cocktail.name}`}>
                <div className="cocktail-name" id={cocktail.id}>
                    <h3> {cocktail.name} </h3>
                </div>
            </Link>
        </div>
    )
}

export default CocktailCard;