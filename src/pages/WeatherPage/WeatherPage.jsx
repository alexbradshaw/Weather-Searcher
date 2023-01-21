import './WeatherPage.css';
import Header from '../../components/Header/Header';
import HistoryContainer from '../../components/HistoryContainer/HistoryContainer';
import MainContainer from '../../components/MainContainer/MainContainer';

import { useState } from 'react';

const WeatherPage = () => {

    const [locations, addLocation] = useState([]);
    const [firstLoad, setState] = useState(false);

    const addNewLocation = (location) => {
        if(!locations.includes(location)){
            var updateVar = JSON.parse(localStorage.getItem("locationsArray"));
            updateVar.push(location);
            addLocation(
                [
                ...locations,
                location
                ]
            );
            var locationVar = locations;
            locationVar.push(location);
            localStorage.setItem("locationsArray", JSON.stringify(locationVar));
        }
    }

    const clearLocations = () => {
        addLocation([]);
    }

    const loadLocations = () => {
        if(typeof(localStorage.getItem('locationsArray')) != "string"){
            localStorage.setItem("locationsArray", JSON.stringify([]));
        }
        addLocation(JSON.parse(localStorage.getItem('locationsArray')));
    }

    if(firstLoad == false){
        loadLocations();
        setState(true);
    }

    return (
        <div className='landing-container'>
            <Header/>
            <HistoryContainer locations={locations} clearLocations={clearLocations}/>
            <MainContainer search={addNewLocation} locations={locations}/>
        </div>
    );

};

export default WeatherPage;