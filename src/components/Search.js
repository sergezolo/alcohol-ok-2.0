import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { updateSearchQuery } from '../actions/search';
import './Header.css';

const Search = (props) => {
    return (
        <React.Fragment>
            <input type="text" placeholder="Search..." id="name" value={props.searchQuery} onChange={(event) => props.updateSearchQuery(event.target.value)}/>
            <button className="button2"><SearchIcon/></button>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
      searchQuery: state.searchReducer.query,
    }
}

export default connect(mapStateToProps, { updateSearchQuery })(Search);