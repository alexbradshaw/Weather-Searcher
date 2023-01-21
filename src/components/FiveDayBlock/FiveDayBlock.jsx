import './FiveDayBlock.css';

const FiveDayBlock = (props) => {

    const date = props.date;
    const icon = props.icon;

    const dateUpdate = (date) => {
        if (date == null) return '';
        var newDate = '';
        var tempString = date.split(' ');
    
        for (let i = 0; i < tempString.length; i++){
            newDate += tempString[i];
            if(i == 0){
                newDate += ',';
            }
            newDate += ' ';
        }
        console.log(newDate);
        return newDate;
    }

    const temperature = props.temperature;
    const humidity = props.humidity;
    const wind = props.wind;
    const sourceString = icon ? "http://openweathermap.org/img/wn/" + icon : '';

    var tempColor;

    if(temperature < 32){
        tempColor = "#e2e2e2"
    } else if(temperature < 68){
        tempColor = "#a2d0ff"
    } else if (temperature < 80) {
        tempColor = "#ffaf26"
    } else {
        tempColor = "#ff443a"
    }

    return (
        <div className='fiveDayBlock'> 
            <div>
                <h4>{dateUpdate(date)}</h4>
                <img src={sourceString} className="icons"></img>
            </div>
            <h5>Temperature: <span style={{color: tempColor}}>{temperature}℉</span></h5>
            <h5>Humidity: {humidity}%</h5>
            <h5>Wind Speed: {wind}mph</h5>
        </div>
    )
}

export default FiveDayBlock;