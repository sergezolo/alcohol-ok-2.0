import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import Search from './Search';

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
        return (
            <div className="Header">
                <div className="leftSide">
                    <button className="button" onClick={this.toggleDropMenu}><ReorderIcon className="buttonImport"/></button>
                    <div className={this.state.isDropMenuOpened ? "dropMenu" : "links"} >
                        <Link to='/' onClick={this.toggleDropMenu}>HOME</Link>
                        <Link to='/create' onClick={this.toggleDropMenu}>ADD A COCKTAIL</Link>
                        <Link to='/ingredients' onClick={this.toggleDropMenu}>INGREDIENTS</Link>
                    </div>
                    
                </div>
                <div className="rightSide">
                    <Search />
                </div>            
            </div>
        )
    }

}

export default Header;