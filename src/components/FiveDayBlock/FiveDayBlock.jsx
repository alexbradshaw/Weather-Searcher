import './FiveDayBlock.css';

const FiveDayBlock = (props) => {

    const date = props.date
    const icon = props.icon

    const temperature = props.temperature
    const humidity = props.humidity
    const sourceString = "http://openweathermap.org/img/wn/" + icon

    return (
        <div className='fiveDayBlock'> 
            <div>
                <h4>{date}</h4>
                <img src={sourceString} className="icon"></img>
            </div>
            <h5>Temperature: {temperature}℉</h5>
            <h5>Humidity: {humidity}%</h5>
        </div>
    )
}

export default FiveDayBlock;