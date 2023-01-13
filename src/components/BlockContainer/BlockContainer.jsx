import './BlockContainer.css';
import DayBlock from '../DayBlock/DayBlock'
import FiveDayContainer from '../FiveDayContainer/FiveDayContainer';

const BlockContainer = () => {

    return (
        <div className='blockContainer'> 
            <DayBlock date={"January 13th 2023"} city={"Atlanta"} temperature={"100"} humidity={"30"} wind={"100"} uvindex={"13"}/>
            <FiveDayContainer/>
        </div>
    )
}


export default BlockContainer;