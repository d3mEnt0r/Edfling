import Navbar from "../navbar/navbar.jsx";
import TempExpert from '../TemporaryExperts/temporaryExpert.jsx';
import HomePage from "../homePage/homePage.jsx";

import edflingBenefits01 from '../../images/3.png';
import edflingBenefits02 from '../../images/Frame 1000004403.png';


function Home(){
    return(
        <div>
            <Navbar />
            <HomePage />
            <img src= {edflingBenefits01} className="edflingBenefits" alt="Edfling Benefits" /> 
            <img src= {edflingBenefits02} className="edflingBenefits" alt="Edfling Benefits" />
            <TempExpert />
        </div>
    );
}

export default Home;