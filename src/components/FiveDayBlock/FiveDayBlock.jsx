import './FiveDayBlock.css';

const FiveDayBlock = (props) => {

    const date = props.date
    const icon = props.icon

    const temperature = props.temperature
    const humidity = props.humidity

    return (
        <div className='fiveDayBlock'> 
            <h4>{date}</h4>
            <h5>Temperature: {temperature}</h5>
            <h5>Humidity: {humidity}</h5>
        </div>
    )
}

export default FiveDayBlock;