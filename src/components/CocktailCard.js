import React from 'react';
import './CocktailCard.css';
import { Link } from 'react-router-dom';

const CocktailCard = (props) => {
    const { cocktail } = props;
    return (
        <div className="cocktail" id={cocktail.id}>
            <div className="cocktail-image">
                {/* {props.loading ? <h3>Loading...</h3> : cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail}/>)} */}
                <img src={cocktail.img_url = "" ? "https://image.freepik.com/free-photo/empty-glasses-drinks_93675-80465.jpg" :cocktail.img_url} alt=""/>
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