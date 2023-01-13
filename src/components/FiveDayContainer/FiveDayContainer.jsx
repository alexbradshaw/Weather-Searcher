import './FiveDayContainer.css';
import FiveDayBlock from '../FiveDayBlock/FiveDayBlock';

const FiveDayContainer = () => {

    return (
        <div className='fiveDayContainer'> 
            <FiveDayBlock date={"January 14th"}/>
            <FiveDayBlock date={"January 15th"}/>
            <FiveDayBlock date={"January 16th"}/>
            <FiveDayBlock date={"January 17th"}/>
            <FiveDayBlock date={"January 18th"}/>
        </div>
    )
}

export default FiveDayContainer;