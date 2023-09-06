import './temporaryExpert.css';
import React from 'react';

function TemporaryExpertCard(){
    return(
        <div className='tempExpertCard'>
            <div className="profilePicture" style={{backgroundImage : 'url("https://m.economictimes.com/thumb/msid-95482968,width-1200,height-900,resizemode-4,imgsize-42058/srk-airport-canva.jpg")'}}></div>
            <h1 className="ExpertName" style={{marginTop: '10px', fontSize: '20px'}}>Dr. Jini K. Gopinath</h1>
            <p style={{margin: '20px auto', fontSize: '14px'}}>Clinical Psychologist, De-Addiction Specialist</p>
            <p>Over 2-decade experience in building resilient organisations, high performing teams and happier individuals.</p>
        </div> 
    )
}

export default TemporaryExpertCard;