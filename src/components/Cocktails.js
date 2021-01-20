import React from 'react';
import CocktailCard from './Cocktail';

const Cocktails = (props) => {
    return (
        <div>
            {console.log(props)}
            <CocktailCard></CocktailCard>
        </div>
    )
}

export default Cocktails;