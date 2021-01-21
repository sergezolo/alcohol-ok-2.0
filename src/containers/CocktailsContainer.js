import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCocktails } from '../actions/cocktails';
import Cocktails from '../components/Cocktails';


class CocktailsContainer extends Component {

    componentDidMount(){
        this.props.getCocktails()
    }

    render() {

        const {cocktails} = this.props

        return (
            <div className="cocktails-container">
                <Switch>
                    <Route path='/' render={() => <Cocktails cocktails={cocktails}/>}/>
                    <Route path='/cocktails/:id'/>
                    <Route path='/cocktails/:id/edit'/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      cocktails: state.cocktailReducer.cocktails,
      loading: state.cocktailReducer.loading
    }
}

export default connect(mapStateToProps, { getCocktails })(CocktailsContainer);