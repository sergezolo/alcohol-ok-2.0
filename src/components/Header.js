import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import Search from './Search';
import { connect } from 'react-redux';
import { clearSearchQuery } from '../actions/search';

export class Header extends Component {

    state = {
       isDropMenuOpened: false
    }

    toggleDropMenu = () => {
        this.setState({
            isDropMenuOpened: !this.state.isDropMenuOpened
        })
    }

    render() {

        const isSearchShown = this.props.location.pathname === "/cocktails";

        return (
            <div className="Header">
                <div className="leftSide">
                    <button className="button" onClick={this.toggleDropMenu}><ReorderIcon className="buttonImport"/></button>
                    <div className={this.state.isDropMenuOpened ? "dropMenu" : "links"} >
                        <Link to='/' onClick={(event) => { this.props.clearSearchQuery(event);  this.toggleDropMenu();}}>HOME</Link>
                        <Link to='/create' onClick={this.toggleDropMenu}>ADD A COCKTAIL</Link>
                        <Link to='/ingredients' onClick={this.toggleDropMenu}>INGREDIENTS</Link>
                    </div>
                    
                </div>
                <div className="rightSide">
                    {isSearchShown ? <Search /> : null}
                </div>            
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      searchQuery: state.searchReducer.query,
    }
}

export default withRouter(connect(mapStateToProps, { clearSearchQuery })(Header));