import './MainContainer.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import DayBlock from '../DayBlock/DayBlock'
import FiveDayContainer from '../FiveDayContainer/FiveDayContainer';
import * as Services from '../../utils/services'

import { useState } from 'react';

const MainContainer = (props) => {

    const [initialLocation, setLocation] = useState(false);

    const [weatherInfo, setWeatherInfo] = useState({
        date: "",
        city: "",
        temperature: 0,
        humidity: 0,
        wind: 0,
        uvindex: 0,
        icon: "",
        event: '',
    });

    const [fiveDayInfo, setFiveDay] = useState({
        date: [],
        temp: [],
        humidity: [],
        wind: [],
        icon: []
    });

    const loadData = (fiveDayArray) => {
        var date;

        var weatherObject = {
            date: [],
            temp: [],
            humidity: [],
            wind: [],
            icon: [],
        }

        for (let i = 0; i < 40; i += 8) {
            date = new Date(fiveDayArray[i + 3].dt * 1000); 
            weatherObject.date[i / 8] = date.toDateString()
            weatherObject.temp[i / 8] = fiveDayArray[i + 3].main.temp
            weatherObject.humidity[i / 8] = fiveDayArray[i + 3].main.humidity
            weatherObject.wind[i / 8] = fiveDayArray[i + 3].wind.speed
            weatherObject.icon[i / 8] = `${fiveDayArray[i + 3].weather[0].icon}@2x.png`
        }

        fiveDayInfoUpdater(weatherObject)
    }

    const displayFunction = () => {
        Services.mainSearch(weatherInfo.event)
        .then(data => weatherInfoUpdater(data))
    }

    const successSearch = (location) =>{
        Services.altSearch(location.coords.latitude, location.coords.longitude)
        .then(data => weatherInfoUpdater(data))
    }

    const weatherInfoUpdater = (data) => {
        props.search(data.fiveDay.city.name);
        var date = new Date(data.weather.current.dt * 1000); 
        setWeatherInfo({
            date: date.toDateString(),
            city: data.fiveDay.city.name,
            temperature: data.weather.current.temp,
            humidity: data.weather.current.humidity,
            wind: data.weather.current.wind_speed,
            uvindex: data.weather.current.uvi,
            icon: `${data.weather.current.weather[0].icon}@2x.png`,
            event: '',
            fiveDayInfo: data.fiveDay
        });
        loadData(data.fiveDay.list);
    }

    const fiveDayInfoUpdater = (data) => {
        fiveDayInfo.date = data.date;
        fiveDayInfo.temp = data.temp;
        fiveDayInfo.humidity = data.humidity;
        fiveDayInfo.wind = data.wind;
        fiveDayInfo.icon = data.icon;
    }

    const error = () => {
        alert("Please enable location services for default location.");
    }

    if(initialLocation == false){
        navigator.geolocation.getCurrentPosition(successSearch, error);
        setLocation(true);
    }

    return (
        <div className='mainContainer'> 
            <SearchComponent weatherInfo={weatherInfo} displayFunction={displayFunction} newSearch={props.newSearch}/>
            <DayBlock date={weatherInfo.date} city={weatherInfo.city} temperature={weatherInfo.temperature} humidity={weatherInfo.humidity} wind={weatherInfo.wind} uvindex={weatherInfo.uvindex} icon={weatherInfo.icon} />
            <FiveDayContainer fiveDayInfo={fiveDayInfo}/>
        </div>
    )
}

export default MainContainer;