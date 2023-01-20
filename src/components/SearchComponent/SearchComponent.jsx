import './SearchComponent.css';
import mainSearch from '../../utils/services';
import { useState } from 'react';

const SearchComponent = (props) => {

    const [weatherInfo, setWeatherInfo] = useState({
        date: "February 21st 2003",
        city: "Atlanta",
        temperature: 100,
        humidity: 50,
        wind: 20,
        uvindex: 5,
        icon: "01d@2x.png"
    });

    // props.weatherInfo
    // setWeatherInfo = props.setWeatherInfo

    const search = async (event) => {
        // console.log(event.target.parentElement.children[0].value);
        const info = await mainSearch("https://api.openweathermap.org/data/2.5/forecast?q=" + event.target.parentElement.children[0].value + "&appid=7f797aeb2c4333e090bbfef3ca363921")
        console.log(info);
        return info;
    }

    const setup = async(event)=>{
        const info = await search(event)
        weatherInfo.city = info.fiveDay.city.name
        console.log(weatherInfo);
    }


    return (
        <div className='searchBar'> 
            <input className='input' type="text" name="name" id='mainInput'></input>
            <button className='searchButton' onClick={setup}>🔍</button>
        </div>
    )
}

export default SearchComponent;