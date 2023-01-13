import './WeatherPage.css';
import Header from '../../components/Header/Header';
import HistoryContainer from '../../components/HistoryContainer/HistoryContainer';
import MainContainer from '../../components/MainContainer/MainContainer';


const WeatherPage = () => {

    return (
        <div className='landing-container'>
            <Header/>
            <HistoryContainer/>
            <MainContainer/>
        </div>
    );

};

export default WeatherPage;