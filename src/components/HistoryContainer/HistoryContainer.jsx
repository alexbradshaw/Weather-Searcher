import './HistoryContainer.css';
import HistoryButton from '../HistoryButton/HistoryButton';
import { useState } from "react";


const HistoryContainer = (props) => {


    const [locations, addLocation] = useState(['Alex', 'Hi', 'Okay', 'Aruba', 'Ecuador', 'Quito']);

    function clearHistory() {
        console.log('clearHistory has been pressed');
    }

    // dont forget to get rid of null searches, invalid searches, just space searches, etc. Also need to fix this
    // addLocation(
    //     [
    //         ...locations,
    //         {}
    //     ]
    // );
    
    return (
        <div className='historyContainer'> 
            <div className='searchHistoryHeader'>Search History</div>
            <div className='buttonContainer'>
                {
                    locations.map(location => {
                        return (<HistoryButton key={location} location={location}/>)
                    })
                }
            </div>
            <button className='clearHistory' onClick={clearHistory}>Clear History</button>
        </div>
    )
}


export default HistoryContainer;