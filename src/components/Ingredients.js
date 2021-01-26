import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSearchQuery } from '../actions/search';

const Ingredients = (props) => {

    const { ingredients, loading } = props


    return (
       
        <div className="ingredients-container">
            <div><h2>Ingredients</h2></div>
            <div><h3>The list of all the ingredients used in the cocktails on the AlcoholOK:</h3></div><br/>
            <div className="grid-ingredients">
                {loading ? <h3>Loading...</h3> : ingredients.sort((a, b) => (a.cocktails.length > b.cocktails.length) ? -1: 1).map(
                    ingredient => 
                    <div className="grid-item" key={ingredient.id}>
                        <li className="li-ing">#<Link className="link-ing" to='/cocktails' onClick={(event) => props.updateSearchQuery(ingredient.name)}>{ingredient.name} </Link> ({ingredient.cocktails.length}x used)</li>
                    </div>)}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      searchQuery: state.searchReducer.query,
    }
}

export default connect(mapStateToProps, { updateSearchQuery })(Ingredients);