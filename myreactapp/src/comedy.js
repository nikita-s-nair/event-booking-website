import React from "react";
import './events.css';
import comedy_1 from '../src/assets/comedy_1.jpg';
import comedy_2 from '../src/assets/comedy_2.jpg';
import comedy_3 from '../src/assets/comedy_3.png';
import comedy_4 from '../src/assets/comedy_4.jpg';
import { Link, Routes, Route } from 'react-router-dom';


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
      <h1 style={{ margin: '1.5cm', textAlign: 'left', fontSize:'50px', color: '#762033' }}><u>Comedy</u></h1>
      <p style={{ margin: '1cm', textAlign: 'left',color: '#762033', fontSize: '22px'}}>Embark on a laughter-filled journey with our comedy showcases. From stand-up to improv, immerse yourself in the art of humor. Witness comedic brilliance that transcends boundaries, tickling your funny bone and leaving you in stitches. Join us for a joyous exploration of laughter and wit!</p>
      <hr style={lineStyle} /> 
      <div className="event1" style={{ display: 'flex' }}>
        <div
          style={{
            ...eventStyle,
            ...enlargeOnHover,
          }}
        >
          
          
          <img
            src={comedy_1}
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
            src={comedy_2}
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
            src={comedy_3}
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
            src={comedy_4}
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
        
      </Routes>
    </div>
  );
};

export default Concert;
