import './SearchComponent.css';
import mainSearch from '../../utils/services';

const SearchComponent = (props) => {

    const [weatherInfo, setWeatherInfo] = useState('');

    const weatherInfo = props.weatherInfo
    const setWeatherInfo = props.setWeatherInfo

    const search = async (event) => {
        // console.log(event.target.parentElement.children[0].value);
        const info = await mainSearch("https://api.openweathermap.org/data/2.5/forecast?q=" + event.target.parentElement.children[0].value + "&appid=7f797aeb2c4333e090bbfef3ca363921")
        weatherInfo = info
        console.log(weatherInfo);
    }

    return (
        <div className='searchBar'> 
            <input className='input' type="text" name="name" id='mainInput'></input>
            <button className='searchButton' onClick={search}>🔍</button>
        </div>
    )
}

export default SearchComponent;