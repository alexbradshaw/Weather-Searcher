import './FiveDayContainer.css';
import FiveDayBlock from '../FiveDayBlock/FiveDayBlock';

const FiveDayContainer = (props) => {

    const fiveDayInfo = props.fiveDayInfo;
    
    return (
        <div className='fiveDayContainer'> 
            <FiveDayBlock date={fiveDayInfo.date[0]} humidity={fiveDayInfo.humidity[0]} icon={fiveDayInfo.icon[0]} temperature={fiveDayInfo.temp[0]} wind={fiveDayInfo.wind[0]}/>
            <FiveDayBlock date={fiveDayInfo.date[1]} humidity={fiveDayInfo.humidity[1]} icon={fiveDayInfo.icon[1]} temperature={fiveDayInfo.temp[1]} wind={fiveDayInfo.wind[1]}/>
            <FiveDayBlock date={fiveDayInfo.date[2]} humidity={fiveDayInfo.humidity[2]} icon={fiveDayInfo.icon[2]} temperature={fiveDayInfo.temp[2]} wind={fiveDayInfo.wind[2]}/>
            <FiveDayBlock date={fiveDayInfo.date[3]} humidity={fiveDayInfo.humidity[3]} icon={fiveDayInfo.icon[3]} temperature={fiveDayInfo.temp[3]} wind={fiveDayInfo.wind[3]}/>
            <FiveDayBlock date={fiveDayInfo.date[4]} humidity={fiveDayInfo.humidity[4]} icon={fiveDayInfo.icon[4]} temperature={fiveDayInfo.temp[4]} wind={fiveDayInfo.wind[4]}/>
        </div>
    )
}

export default FiveDayContainer;