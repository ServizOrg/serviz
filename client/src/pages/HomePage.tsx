import Main from "../components/Main-view/Main-view";
import Search from '../components/search/Search';
import Categories from "../components/Categories-container/Categories-container";
import HowWorks from '../components/HowWorks/HowWorks'
import Header from "../components/Header/Header";
import './home.css'

require('dotenv').config();

const HomePage = () => {
    return ( 
        <div>
           
            
            <Header/>
            <Search />
            <Categories />
           
        </div>
     );
}
 
export default HomePage;