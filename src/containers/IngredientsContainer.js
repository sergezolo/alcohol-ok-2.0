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
        console.log(this.props)
        const {ingredients, loading} = this.props
        console.log(ingredients)
        return (
            <div>
                <Switch>
                    <Route exact path='/ingredients' render={() => <Ingredients ingredients={ingredients} loading={loading}/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      ingredients: state.ingredientsReducer.ingredients,
      loading: state.ingredientsReducer.loading
    }
}

export default connect(mapStateToProps, { getIngredients })(IngredientsContainer);