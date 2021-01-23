import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

const Search = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <input type="text" placeholder="Search..." id="name" />
            <button className="button"><SearchIcon/></button>
        </React.Fragment>
    )
}

export default Search;