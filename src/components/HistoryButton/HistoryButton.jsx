import './HistoryButton.css';



const HistoryButton = (props) => {
    const location = props.location

    function runSearch(event){
        console.log(event.target.innerHTML)
    }

    return (
            <button className='button' onClick={runSearch}>{location}</button>
    )
}




export default HistoryButton;