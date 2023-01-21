import './SearchComponent.css';

const SearchComponent = (props) => {

    const weatherInfo = props.weatherInfo;
    var displayFunction = props.displayFunction;

    const search = (event) => {
        event.preventDefault();
        weatherInfo.event = event.target.parentElement.children[0].value;
        document.getElementById('mainInput').value = '';
        displayFunction();
    }

    return (
        <form className='searchBar'> 
            <input className='input' type="search" name="name" id='mainInput' onSubmit={search}></input>
            <button className='searchButton' onClick={search}>🔍</button>
        </form>
    )
}

export default SearchComponent;