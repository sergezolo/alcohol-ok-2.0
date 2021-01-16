import React, { Component } from 'react'
import './Header.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';

export class Header extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div className="Header">
                <div className="leftSide">
                    <button className="button" onClick={this.handleClick}><ReorderIcon className="buttonImport"/></button>
                    <div className={this.state.clicked ? "dropMenu" : "links"} >
                        <a href='/home'>HOME</a>
                        <a href='/create'>ADD A COCKTAIL</a>
                        <a href='/favorites'>FAVORITES</a>
                    </div>
                    
                </div>
                <div className="rightSide">
                    <input type="text" placeholder="Search..."/>
                    <button className="button"><SearchIcon/></button>
                </div>            
            </div>
        )
    }

}

export default Header;