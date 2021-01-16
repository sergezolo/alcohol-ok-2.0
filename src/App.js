import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCocktails } from './actions/cocktails';
import Header from './components/Header';
import Footer from './components/Footer';


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
        <Header/>
        <header className="App-header">
          <React.Fragment>
            
            <ul>{this.props.loading ? <h3>Loading...</h3> : cocktails}</ul>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </React.Fragment>
          
          
        </header>
        <Footer/>
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
