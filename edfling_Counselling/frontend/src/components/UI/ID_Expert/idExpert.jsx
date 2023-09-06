import './idExpert.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


import { fetchExpertByID } from '../../../service/api';


import Navbar from '../navbar/navbar';



const IdExpert = () => {

    const [expertData, setExpertData] = useState({});
    
    
    const { id } = useParams();
    
      
        useEffect(() => {
          const fetchExpert = async () => {
            let response = await fetchExpertByID(id);
            setExpertData(response);
          };
          fetchExpert();
        }, [id]);
        

        const handleOpenMailClient = () => {
          const recipientEmail = expertData.email;
          const subject = 'Edfling Counselling';
        
          const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
          window.location.href = mailtoLink;
        };


        const bookAppointment = () => {
          const recipientEmail = expertData.email;
          const subject = 'Book Appointment';
          const scheduleDate = expertData.next_available;
          const scheduleTime = expertData.chat_schedule;

          const roomName = uuidv4(); // Generate a random room name
          const YOUR_APP_ID = uuidv4(); // Generate a random app ID

          const msg = 
          `Dear ${expertData.name},

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
        <div>
            <Navbar />
            <div className='outer-container'>
                <div className='info'>
                  <h1>{expertData.name}</h1>
                  <h3>{expertData.role}</h3>
                  <p>{expertData.about}</p>
                  <p><i className="fa-solid fa-clock"></i> Available on: <b>{expertData.chat_schedule}</b></p>
                  <Link to='/chat'><button className='chat'>CHAT</button></Link>
                  <button onClick={handleOpenMailClient} className='message'>MESSAGE</button>
                  <button onClick={bookAppointment} className='appointment'>APPOINTMENT</button>
                </div>

                <div className='skill inner-container'>
                <h2><i class="fa-solid fa-sun"></i> Skills</h2>
                {expertData.skills && expertData.skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
                </div>
                <div className='summary inner-container'>
                  <h2><i class="fa-solid fa-file-lines"></i> Summary</h2>
                  <p>{expertData.summary}</p>
                </div>
                <div className='education inner-container'>
                <h2><i class="fa-solid fa-graduation-cap"></i> Education</h2>
                {expertData.education && expertData.education.map((education, index) => (
                    <p key={index}>- {education}</p>
                ))}
                </div>
                <div className='experience inner-container'>
                <h2><i class="fa-solid fa-briefcase"></i> Experience</h2>
                  {expertData.experience && expertData.experience.map((experience, index) => (
                      <p key={index}>- {experience}</p>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default IdExpert;