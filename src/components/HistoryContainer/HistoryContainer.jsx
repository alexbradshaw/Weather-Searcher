import './HistoryContainer.css';



const HistoryContainer = () => {

    function clearHistory() {
        console.log('clearHistory has been pressed');
    }

    return (
        <div className='historyContainer'> 
            <div className='searchHistoryHeader'>Search History</div>
            <button className='clearHistory' onClick={clearHistory}>Clear History</button>
        </div>
    )
}


export default HistoryContainer;