import React from 'react';
import CocktailCard from './CocktailCard';

const Cocktails = (props) => {
    const {cocktails} = props;
    return (
        <React.Fragment>
            {props.loading ? <h3>Loading...</h3> : cocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail}/>)}
        </React.Fragment>
    )
}

export default Cocktails;