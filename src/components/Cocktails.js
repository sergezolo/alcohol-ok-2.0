import React from 'react';
import CocktailCard from './CocktailCard';

const Cocktails = (props) => {
    console.log(props)
    const {cocktails} = props;
    return (
        <React.Fragment>
            {cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail}/>)}
        </React.Fragment>
    )
}

export default Cocktails;