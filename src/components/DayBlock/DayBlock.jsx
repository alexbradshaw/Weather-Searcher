import './DayBlock.css';

const DayBlock = (props) => {
    
    const date = props.date;
    const city = props.city;
    
    const temperature = props.temperature;
    const humidity = props.humidity;
    const wind = props.wind;
    const uvindex = props.uvindex;

    const icon = props.icon;

    const sourceString = icon ? "http://openweathermap.org/img/wn/" + icon : '';

    var backgroundColor;

    if(uvindex <= 6){
        backgroundColor = "green";
    } else if(uvindex <= 9){
        backgroundColor = "yellow";
    } else if (uvindex <= 12){
        backgroundColor = "red";
    } else {
        backgroundColor = "purple";
    }

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

    const dateUpdate = (date) => {
        if (date == '') return '';
        var newDate = '';
        var tempString = date.split(' ');
    
        for (let i = 0; i < tempString.length; i++){
            newDate += tempString[i];
            if(i == 0){
                newDate += ',';
            }
            newDate += ' ';
        }
        
        return newDate;
    }

    return (
        <div className='dayBlock'> 
            <div className='dayblockHeader'>
                <div className='infoHeader'>
                    <h3>{city}</h3>
                    <img src={sourceString} className="icon"></img>
                </div>
                <h3 className='dateh3'>{dateUpdate(date)}</h3>
            </div>
            <div className='informationBox'>
                <h4>Temperature:  <span style={{color: tempColor}}>{temperature}℉</span></h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Wind Speed: {wind}MPH</h4>
                <h4 style={{height:"40px"}} >UV Index: <span className='uvindex' style={{backgroundColor: backgroundColor}}>{uvindex}</span></h4>
            </div>
        </div>
    )
}


export default DayBlock;