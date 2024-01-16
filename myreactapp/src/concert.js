import React from "react";
import './events.css';
import concert_1 from '../src/assets/concert_1.jpg';
import concert_2 from '../src/assets/concert_2.jpg';
import concert_4 from '../src/assets/concert_4.jpg';
import concert_5 from '../src/assets/concert_5.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import EventPage1 from './EventPage1'; 

const Concert = () => {
  const eventStyle = {
    border: '5px solid #9b344a',
    textAlign: 'center',
    margin: '1cm',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    width: '213px',  
    height: '192px',
    backgroundColor: 'white',
  };

  const enlargeOnHover = {
    transform: 'scale(1.03)',  
  };

  const lineStyle = {
    border: '1px solid #ccc',
    width: 'calc(100% - 3cm)', 
    margin: '1cm auto',  
  };

  const bodyStyle = {
    filter: 'brightness(80%)', 
    margin: '1cm',
    height: '100vh',
    width: '95%',
  };

  return (
    <div style={bodyStyle}>
      <h1 style={{ margin: '1.5cm', textAlign: 'left', fontSize:'50px', color: '#762033' }}><u>Concert</u></h1>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Embark on a musical journey with our mesmerizing concerts. From electrifying performances to soulful renditions, immerse yourself in an unforgettable live experience. Feel the rhythm, savor the melodies, and create timeless memories with the magic of music.</p>
      <hr style={lineStyle} /> 
      <div className="event1" style={{ display: 'flex' }}>
        <div
          style={{
            ...eventStyle,
            ...enlargeOnHover,
          }}
        >
          
          
          <img
            src={concert_1}
            alt="Event 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the entire container
            }}
          />
          
        </div>
        <div
          style={{ ...eventStyle, ...enlargeOnHover }}
        >
          <img
            src={concert_2}
            alt="Event 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the entire container
            }}
          />
        </div>
        <div
          style={{ ...eventStyle, ...enlargeOnHover }}
        >
          <img
            src={concert_4}
            alt="Event 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the entire container
            }}
          />
        </div>
        <div
          style={{ ...eventStyle, ...enlargeOnHover }}
        >
          <img
            src={concert_5}
            alt="Event 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the entire container
            }}
          />
        </div>
      </div>
      <Routes>
      <Route path="/Details" element={<EventPage1 />} />
      </Routes>
    </div>
  );
};

export default Concert;
