import './HistoryContainer.css';
import HistoryButton from '../HistoryButton/HistoryButton';

const HistoryContainer = (props) => {

    var locations = props.locations;
    var clearLocations = props.clearLocations;

    function clearHistory() {
        clearLocations();
        localStorage.removeItem('locationsArray');
    }
    
    return (
        <div className='historyContainer'> 
            <div className='searchHistoryHeader'>Search History</div>
            <div className='buttonContainer'>
                {
                    locations.map(location => {
                        return (<HistoryButton key={location} location={location} search={props.search}/>)
                    })
                }
            </div>
            <button className='clearHistory' onClick={clearHistory}>Clear History</button>
        </div>
    )
}


export default HistoryContainer;