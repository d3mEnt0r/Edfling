import './expertList.css';
import { useState, useEffect } from 'react';


import ExpertCard from './expertCard';
import Navbar from '../navbar/navbar';


import { API } from '../../../service/api.js';


function ExpertList() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await API.expertList();
        setExperts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExperts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className='expertListHeading'>EdflinG Experts</h1>
      <div className='listOfExperts'>
        {experts.map((expert) => (
            <ExpertCard key={expert.expert_id} expert={expert} />
        ))}
      </div>
    </div>
  );
}

export default ExpertList;
