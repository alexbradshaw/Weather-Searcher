import './DayBlock.css';

const DayBlock = (props) => {
    
    const currentDate = props.date
    const city = props.city
    
    const temperature = props.temperature
    const humidity = props.humidity
    const wind = props.wind
    const uvindex = props.uvindex

    const icon = props.icon

    const sourceString = "http://openweathermap.org/img/wn/" + icon

    var backgroundColor;

    if(uvindex <= 6){
        backgroundColor = "green"
    } else if(uvindex <= 9){
        backgroundColor = "yellow"
    } else if (uvindex <= 12){
        backgroundColor = "red"
    } else {
        backgroundColor = "purple"
    }

    return (
        <div className='dayBlock'> 
            <div className='dayblockHeader'>
                <div className='infoHeader'>
                    <h3>{city}</h3>
                    <img src={sourceString} className="icon"></img>
                </div>
                <h3 className='dateh3'>{currentDate}</h3>
            </div>
            <div className='informationBox'>
                <h4>Temperature: {temperature}℉</h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Wind Speed: {wind}MPH</h4>
                <h4 style={{height:"40px"}} >UV Index: <span className='uvindex' style={{backgroundColor: backgroundColor}}>{uvindex}</span></h4>
            </div>
        </div>
    )
}


export default DayBlock;