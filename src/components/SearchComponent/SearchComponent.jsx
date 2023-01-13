import './SearchComponent.css';


const SearchComponent = () => {

    function search(event){
        console.log(event.target.parentElement.children[0].value);
    }

    return (
        <div className='searchBar'> 
            <input className='input' type="text" name="name"></input>
            <button className='searchButton' onClick={search}>🔍</button>
        </div>
    )
}

export default SearchComponent