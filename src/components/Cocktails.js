import React from 'react';
import CocktailCard from './CocktailCard';
import { connect } from 'react-redux';
import { updateSearchQuery } from '../actions/search'

const Cocktails = (props) => {
    const {cocktails, searchQuery} = props;
    const filteredCocktails = cocktails.filter(cocktail => 
        searchQuery === "" ||
        cocktail.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
        cocktail.ingredients.some(ingredient => ingredient.name.toUpperCase().includes(searchQuery.toUpperCase()))
    )

    return (
        <React.Fragment>
            {props.loading ? <h3>Loading...</h3> : (filteredCocktails.length === 0 ? <h3>No match!</h3> : filteredCocktails.map(cocktail => <CocktailCard key={cocktail.id} cocktail={cocktail}/>))}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
      searchQuery: state.searchReducer.query,
    }
}

export default connect(mapStateToProps, { updateSearchQuery })(Cocktails);