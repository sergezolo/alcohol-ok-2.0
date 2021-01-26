import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header';
import CocktailsContainer from './containers/CocktailsContainer';
import CocktailForm from './components/CocktailForm';
import IngredientsContainer from './containers/IngredientsContainer';
import Error from './pages/Error'
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Header/>
            <Switch>
              <Redirect exact from='/' to='/cocktails'/>
              <Route path='/cocktails' component={ CocktailsContainer }/>
              <Route path='/create' component={ CocktailForm }/>
              <Route path='/ingredients' component={ IngredientsContainer }/>
              <Route path='/*' component={ Error }/>
            </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;