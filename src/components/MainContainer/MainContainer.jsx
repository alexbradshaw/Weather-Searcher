import './MainContainer.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import DayBlock from '../DayBlock/DayBlock'
import FiveDayContainer from '../FiveDayContainer/FiveDayContainer';
import mainSearch from '../../utils/services';

import { useState } from 'react';
import { render } from '@testing-library/react';

const MainContainer = () => {

    const [weatherInfo, setWeatherInfo] = useState({
        date: "",
        city: "",
        temperature: 0,
        humidity: 0,
        wind: 0,
        uvindex: 0,
        icon: "",
        event: ''
    });

    const search = async () => {
        const info = await mainSearch("https://api.openweathermap.org/data/2.5/forecast?q=" + weatherInfo.event + "&appid=7f797aeb2c4333e090bbfef3ca363921")
        return info;
    }

    const displayFunction = () => {
        search()
        .then(data => {
            var date = new Date(data.weather.current.dt * 1000); 
            setWeatherInfo({
                date: date.toDateString(),
                city: data.fiveDay.city.name,
                temperature: data.weather.current.temp,
                humidity: data.weather.current.humidity,
                wind: data.weather.current.wind_speed,
                uvindex: data.weather.current.uvi,
                icon: `${data.weather.current.weather[0].icon}@2x.png`,
                event: ''
            })
        })
    }

    return (
        <div className='mainContainer'> 
            <SearchComponent weatherInfo={weatherInfo} displayFunction={displayFunction}/>
            <DayBlock date={weatherInfo.date} city={weatherInfo.city} temperature={weatherInfo.temperature} humidity={weatherInfo.humidity} wind={weatherInfo.wind} uvindex={weatherInfo.uvindex} icon={weatherInfo.icon} />
            <FiveDayContainer/>
        </div>
    )
}

export default MainContainer;