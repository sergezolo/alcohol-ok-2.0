import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getIngredients } from '../actions/ingredients';
import Ingredients from '../components/Ingredients';

class IngredientsContainer extends Component {

    componentDidMount(){
        this.props.getIngredients()
    }
 
    render() {

        const { ingredients, loading, cocktails } = this.props

        return (
            <div className="cocktails-container">
                <Switch>
                    <Route exact path='/ingredients' render={() => <Ingredients ingredients={ingredients} loading={loading} cocktails={cocktails} />}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredientReducer.ingredients,
        loading: state.ingredientReducer.loading
    }
}

export default connect(mapStateToProps, { getIngredients })(IngredientsContainer);