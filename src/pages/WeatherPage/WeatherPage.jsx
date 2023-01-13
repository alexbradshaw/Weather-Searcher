import './WeatherPage.css';
import Header from '../../components/Header/Header';
import HistoryContainer from '../../components/HistoryContainer/HistoryContainer';

const WeatherPage = () => {

    return (
        <div className='landing-container'>
            <Header/>
            <HistoryContainer/>
        </div>
    );

};

export default WeatherPage;