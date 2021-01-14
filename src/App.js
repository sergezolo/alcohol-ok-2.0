import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render(){

    const cocktails = this.props.cocktails.map((cocktail, index) => {
      return <li key={index}>{cocktail.name}</li>;
    })

    return (
      <div className="App">
        <header className="App-header">
          <ul>{this.props.loading ? <h3>Loading...</h3> : cocktails}</ul>
        </header>
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

export default connect(mapStateToProps)(App);
