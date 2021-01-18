import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import CocktailsContainer from './containers/CocktailsContainer';
import Footer from './components/Footer';
import './App.css';


class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Header/>
            <React.Fragment>
              <Switch>
                <Route path='/' component={ CocktailsContainer }/>
              </Switch>
            </React.Fragment>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;