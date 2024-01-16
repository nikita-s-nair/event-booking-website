import React from "react";
import './events.css';
import plays_2 from '../src/assets/plays_2.jpg';
import plays_3 from '../src/assets/plays_3.jpg';
import plays_4 from '../src/assets/plays_4.jpg';
import plays_5 from '../src/assets/plays_5.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import EventPage from './EventPage0'; 

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
      <h1 style={{ margin: '1.5cm', textAlign: 'left', fontSize:'50px', color: '#762033' }}><u>Plays</u></h1>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Captivating narratives brought to life through the art of performance-That's the beauty of Plays. Serving as a vibrant tapestry of human experiences, emotions, and imagination, where characters breathe and stories unfold, they invite audiences to explore the depths of the human condition in a world woven with words, actions, and the magic of theater.</p>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Note: Booking of only the first event is available currently.</p>
      <hr style={lineStyle} /> 
      <div className="event1" style={{ display: 'flex' }}>
        <div
          style={{
            ...eventStyle,
            ...enlargeOnHover,
          }}
        >
          
          <Link to="/Details/655ed9ac7c28aeb204affbe0" className="deets" style={{ color: 'white' }}>
          <img
            src={plays_3}
            alt="Event 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensure the image covers the entire container
            }}
          />
          </Link>
        </div>
        <div
          style={{ ...eventStyle, ...enlargeOnHover }}
        >
          <img
            src={plays_2}
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
            src={plays_4}
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
            src={plays_5}
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
        <Route path="/Details/655ed9ac7c28aeb204affbe0" element={<EventPage />} />
      </Routes>
    </div>
  );
};

export default Plays;