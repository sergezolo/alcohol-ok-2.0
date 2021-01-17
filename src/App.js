import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { getCocktails } from './actions/cocktails';
import Header from './components/Header';
import Footer from './components/Footer';
import CocktailForm from './components/CocktailForm';


class App extends Component {

  componentDidMount(){
    this.props.getCocktails()
  }

  render(){
    const cocktails = this.props.cocktails.map((cocktail, index) => {
      return <li key={index}>{cocktail.name}</li>;
    })

    return (
      <div className="App">
        <Router>
          <Header/>
          <CocktailForm />
          <Route path="/" />
            <ul>{this.props.loading ? <h3>Loading...</h3> : cocktails}</ul>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Footer/>
        </Router>
      </div>
    );
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    cocktails: state.cocktailReducer.cocktails,
    loading: state.cocktailReducer.loading
  }
}

export default connect(mapStateToProps, { getCocktails })(App);
