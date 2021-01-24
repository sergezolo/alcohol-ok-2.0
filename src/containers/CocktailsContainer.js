import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCocktails } from '../actions/cocktails';
import Cocktails from '../components/Cocktails';
import Cocktail from '../components/Cocktail';



class CocktailsContainer extends Component {

    componentDidMount(){
        this.props.getCocktails()
    }

    render() {

        const {cocktails, loading} = this.props

        return (
            <div className="cocktails-container">
                <Switch>
                    <Route exact path='/cocktails' render={() => <Cocktails cocktails={cocktails} loading={loading}/>}/>
                    <Route path='/cocktails/:id' render={(routerProps) => <Cocktail {...routerProps} cocktails={cocktails} loading={loading}/>}/>
                    <Route path='/cocktails/:id/edit'/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      cocktails: state.cocktailReducer.cocktails,
      loading: state.cocktailReducer.loading
    }
}

export default connect(mapStateToProps, { getCocktails })(CocktailsContainer);