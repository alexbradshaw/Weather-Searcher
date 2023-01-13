import './DayBlock.css';

const DayBlock = (props) => {
    
    const currentDate = props.date
    const city = props.city
    
    const temperature = props.temperature
    const humidity = props.humidity
    const wind = props.wind
    const uvindex = props.uvindex

    return (
        <div className='dayBlock'> 
            <h3 className='infoHeader'>{city} {currentDate}</h3>
            <div className='informationBox'>
                <h4>Temperature: {temperature}℉</h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Wind Speed: {wind}MPH</h4>
                <h4>UV Index: {uvindex}</h4>
            </div>
        </div>
    )
}


export default DayBlock;