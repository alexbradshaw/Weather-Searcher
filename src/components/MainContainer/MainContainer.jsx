import './MainContainer.css';
import SearchComponent from '../SearchComponent/SearchComponent';
import BlockContainer from '../BlockContainer/BlockContainer';

const MainContainer = () => {

    return (
        <div className='mainContainer'> 
            <SearchComponent/>
            <BlockContainer/>  
        </div>
    )
}

export default MainContainer;