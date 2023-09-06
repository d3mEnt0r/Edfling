import './expertList.css';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ExpertCard(props) {

  const expert = props.expert;

  // Add logic to format the expert's name if it's too long
  let displayName = expert.name;
  
  if (expert.name.length > 14) {
    displayName = expert.name.substring(0, 14) + "...";
  }

  const expertImageClass = expert.online ? 'expertImage online' : 'expertImage';


  const handleOpenMailClient = (email) => {
    const recipientEmail = email;
    const subject = 'Edfling Counselling';
  
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };


  const bookAppointment = () => {
    const recipientEmail = expert.email;
    const subject = 'Book Appointment';
    const scheduleDate = expert.next_available;
    const scheduleTime = expert.chat_schedule;

    const roomName = uuidv4(); // Generate a random room name
    const YOUR_APP_ID = uuidv4(); // Generate a random app ID

    const msg = 
    `Dear ${expert.name},

    I hope this message finds you well. I would like to book an appointment for a meeting session with you.
    
    Appointment Details:
    
    Date: ${scheduleDate}
    Time Slot: ${scheduleTime}
    Room Name: ${roomName}
    App ID: ${YOUR_APP_ID}
    
    Please let me know if the provided date and time work for you. I am looking forward to our meeting.
    
    Thank you and best regards,
    [Your Name]
    `

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailtoLink;
  }



  return (
    <div className='outer-expert-container'>
    <div className='expertCard'>
        <Link to={`/expert/${expert._id}`}>
          <div className='expertCardContainer'>
            <div className={expertImageClass}></div>
            <div>
              <h1 className='expertName' style={{ color: 'black' }}>{displayName}</h1>
              <p>{expert.role}</p>
              <p>Conversations: <b>1001</b></p>
            </div>
          </div>
          <div>
            <p><i className="fa-solid fa-calendar-days"></i> <b>Next Available Schedule:</b> {expert.next_available}</p>
            <p><i className="fa-solid fa-clock"></i> <b>Chat Schedule:</b> {expert.chat_schedule}</p>
          </div>
        </Link>       
      
    </div>
    {
      expert.online === true ?
      <div className='card-btns'>
        <Link to='/chat'><button className='expert-chat'>CHAT</button></Link>
        <Link to='/experts'><button onClick={() => handleOpenMailClient(expert.email)} className='expert-message'>MESSAGE</button></Link>
        <Link to='/experts'><button onClick={() => bookAppointment(expert)} className='expert-appointment'>APPOINTMENT</button></Link>
      </div>
      :
      <div className='card-btns'>
      <Link to='/experts'><button onClick={() => handleOpenMailClient(expert.email)} className='expert-message'>MESSAGE</button></Link>
      <Link to='/experts'><button onClick={() => bookAppointment(expert)} className='expert-appointment'>APPOINTMENT</button></Link>
      </div>
    }
    </div>
  );
}

export default ExpertCard;