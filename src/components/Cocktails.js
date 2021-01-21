import React from 'react';
import CocktailCard from './CocktailCard';

const Cocktails = (props) => {
    console.log(props)
    const {cocktails} = props;
    return (
        <div>
           
            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail}/>)}
        </div>
    )
}

export default Cocktails;