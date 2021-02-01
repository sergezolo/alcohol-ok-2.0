import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearSearchQuery } from '../actions/search';

const Footer = (props) => {
    return (
        <div className="Footer">
            <div className="leftSide">
                <Link to='/' onClick={props.clearSearchQuery}><h2>alcoholOK </h2></Link>
            </div>
            <div className="centralSide">
                <div className="links">
                    <Link to='/' onClick={props.clearSearchQuery}>HOME</Link>
                    <Link to='/create'>ADD A COCKTAIL</Link>
                    <Link to='/ingredients'>INGREDIENTS</Link>
                </div>
            </div>
            <div className="rightSide">
                <p>“I have taken more out of alcohol than alcohol has taken out of me.” - Winston Churchill</p>
                <p>“Too much of anything is bad, but too much good whiskey is barely enough.” - Mark Twain</p>
                <p>"Milk is for babies. When you grow up you have to drink beer." - Arnold Schwarzenegger</p>
            </div>   
        </div>
    )
}

const mapStateToProps = state => {
    return {
      searchQuery: state.searchReducer.query,
    }
}

export default connect(mapStateToProps, { clearSearchQuery })(Footer);