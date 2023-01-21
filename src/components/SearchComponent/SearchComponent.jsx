import './SearchComponent.css';
import mainSearch from '../../utils/services';
import { useState } from 'react';

const SearchComponent = (props) => {

    const weatherInfo = props.weatherInfo
    var displayFunction = props.displayFunction

    const search = (event) => {
        weatherInfo.event = event.target.parentElement.children[0].value
        displayFunction()
    }

    return (
        <div className='searchBar'> 
            <input className='input' type="text" name="name" id='mainInput'></input>
            <button className='searchButton' onClick={search}>🔍</button>
        </div>
    )
}

export default SearchComponent;