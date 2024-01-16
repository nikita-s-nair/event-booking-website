import React from "react";
import './events.css';
import circus_1 from '../src/assets/circus_1.jpeg';
import circus_2 from '../src/assets/circus_2.jpeg';
import circus_3 from '../src/assets/circus_3.jpg';
import circus_4 from '../src/assets/circus_4.jpg';
import { Link, Routes, Route } from 'react-router-dom';
import EventPage4 from './EventPage4'; 

const Circus = () => {
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
      <h1 style={{ margin: '1.5cm', textAlign: 'left', fontSize:'50px', color: '#762033' }}><u>Circus</u></h1>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Step into the dazzling world of the circus, where wonder and excitement unfold under the big top. Marvel at gravity-defying acrobatics, comedic brilliance, and majestic performances that transport you to a realm of enchantment and awe. Experience the magic, laughter, and thrills of the circus spectacle!</p>
      <hr style={lineStyle} /> 
      <div className="event1" style={{ display: 'flex' }}>
        <div
          style={{
            ...eventStyle,
            ...enlargeOnHover,
          }}
        >
          
          <Link to="/CircusDetails/655e0be86691d75810556d42" className="deets" style={{ color: 'white' }}>
          <img
            src={circus_1}
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
          <Link to="/CircusDetails/655e0be86691d75810556d42" className="deets" style={{ color: 'white' }}>
          <img
            src={circus_2}
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
            src={circus_3}
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
            src={circus_4}
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
        <Route path="/CircusDetails/655e0be86691d75810556d42" element={<EventPage4 />} />
      </Routes>
    </div>
  );
};

export default Circus;
