import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { getEventDetails } from './api-helpers';


const Booking = () => {
    const id = useParams().id;
  const navigate = useNavigate();
  console.log(id); 

  const [event, setEvent] = useState('');


  useEffect(()=>{
    getEventDetails(id)
    .then((res)=>setEvent(res.event))
    .catch((err)=>console.log(err));
  },[id]);
  console.log(event);
}

export default Booking;