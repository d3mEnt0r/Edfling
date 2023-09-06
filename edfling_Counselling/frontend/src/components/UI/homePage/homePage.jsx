import './homePage.css';

import image001 from '../../images/Group 1000003296.png';

const HomePage = () => {


    return(
        <div className='homePageSection'>
            <div>
            <h1 className='getHelp'>Get Help. Get Better.</h1>
            <p className='homePageSectionDescription'>No matter what's troubling you, get the support you need, right here, right now.</p>
            <a href='/chat'><button className='homeChatBtn'>Chat Now</button></a>
            <a href='/experts'><button className='homeAppointmentBtn'>Book Appointment</button></a>
            </div>
            <img className='image001' src={image001} alt="Edfling" />
        </div>
    )
}

export default HomePage;