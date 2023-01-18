import './FiveDayContainer.css';
import FiveDayBlock from '../FiveDayBlock/FiveDayBlock';

const FiveDayContainer = () => {

    return (
        <div className='fiveDayContainer'> 
            <FiveDayBlock date={"January 14th"} temperature={"50"} humidity={"30"} icon={"01d@2x.png"}/>
            <FiveDayBlock date={"January 15th"} temperature={"50"} humidity={"30"} icon={"01d@2x.png"}/>
            <FiveDayBlock date={"January 16th"} temperature={"50"} humidity={"30"} icon={"01d@2x.png"}/>
            <FiveDayBlock date={"January 17th"} temperature={"50"} humidity={"30"} icon={"01d@2x.png"}/>
            <FiveDayBlock date={"January 18th"} temperature={"50"} humidity={"30"} icon={"01d@2x.png"}/>
        </div>
    )
}

export default FiveDayContainer;