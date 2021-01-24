import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import CocktailsContainer from './containers/CocktailsContainer';
import CocktailForm from './components/CocktailForm';
import Favorite from './components/Favorite';
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
              <Route exact path='/' component={ CocktailsContainer }/>
              <Route path='/create' component={ CocktailForm }/>
              <Route path='/favorites' component={ Favorite }/>
              <Route path='/*' component={ Error }/>
            </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;