import './HistoryButton.css';



const HistoryButton = (props) => {
    const location = props.location
    var input;

    // all you need to do here is pass it into the fetch function not throw it in the search bar lol - import the fetch into this program
    function runSearch(event){
        input = document.getElementById("mainInput")
        input.value = event.target.innerHTML
    }

    return (
            <button className='button' onClick={runSearch}>{location}</button>
    )
}




export default HistoryButton;