import './HistoryButton.css';

const HistoryButton = (props) => {
    const location = props.location;
    var input;

    function runSearch(event){
        input = document.getElementById("mainInput");
        input.value = event.target.innerHTML;
        input.nextSibling.click();
        input.value = '';
    }

    return (
            <button className='button' onClick={runSearch}>{location}</button>
    )
}

export default HistoryButton;