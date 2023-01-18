import './MainContainer.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import BlockContainer from '../BlockContainer/BlockContainer';

import { useState } from 'react';

const MainContainer = () => {

    const [weatherInfo, setWeatherInfo] = useState('');
   
    return (
        <div className='mainContainer'> 
            <SearchComponent weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo}/>
            <BlockContainer weatherInfo={weatherInfo} setWeatherInfo={setWeatherInfo}/>  
        </div>
    )
}

export default MainContainer;