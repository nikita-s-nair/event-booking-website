import React from "react";
import './events.css';
import opera_1 from '../src/assets/opera_1.jpg';
import opera_2 from '../src/assets/opera_2.jpg';
import opera_4 from '../src/assets/opera_4.jpg';
import opera_5 from '../src/assets/opera_5.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import EventPage1 from './EventPage1'; 

const Plays = () => {
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
      <h1 style={{ margin: '1.5cm', textAlign: 'left', fontSize:'50px', color: '#762033' }}><u>Opera</u></h1>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Discover the enchanting world of operas, where emotion meets artistry. From timeless classics to contemporary masterpieces, experience the grandeur of storytelling through captivating music, elaborate staging, and powerful vocals. Immerse yourself in a realm where every note resonates with passion and drama.</p>
      <hr style={lineStyle} /> 
      <div className="event1" style={{ display: 'flex' }}>
        <div
          style={{
            ...eventStyle,
            ...enlargeOnHover,
          }}
        >
          
          
          <img
            src={opera_4}
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
            src={opera_2}
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
            src={opera_1}
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
            src={opera_5}
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

export default Plays;
