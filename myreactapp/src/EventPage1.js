import React from 'react';
import opera_4 from '../src/assets/opera_4.jpg';
import { useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Go back to the previous page
    navigate(-1);
  };

  return (
    <div style={{ 
      textAlign: 'left', 
      padding: '20px',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      color: '#ab4a63'
    }}>
      <div className="left">
        {/* Title */}
        <h1>The Phantom of the Opera</h1>

        {/* Description Box */}
        <div
          style={{
            border: '2px solid #ab4a63',
            padding: '20px',
            marginBottom: '40px',
            width: '500px',
            height: '200px',
          }}
        >
          <p>
            Indulge in the timeless allure of 'The Phantom of the Opera.' Immerse yourself in the haunting romance, melodious arias, and the mysterious allure of the masked phantom, creating an unforgettable operatic masterpiece.
          </p>
        </div>

        {/* Book Tickets Button */}
        <button
          style={{
            padding: '20px 20px',
            display: 'block',
            fontSize: '16px',
            margin: '0 10px',
            backgroundColor: '#df6e94',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Book Tickets
        </button>

        {/* Back Button */}
        <button
          onClick={handleBack}
          style={{
            padding: '10px 20px',
            display: 'block',
            fontSize: '16px',
            margin: '10px 10px',
            backgroundColor: '#df6e94',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back
        </button>
      </div>

      <div className="right" style={{
        border: '2px solid #ab4a63',
        padding: '10px',
        marginTop: '70px',
        marginLeft: '40px',
        marginBottom: '40px',
        width: '600px',
        height: '350px',
        color: 'black',
        backgroundColor: 'pink',
      }}>
        <img
          src={opera_4}
          alt="Event Image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // ensure the image covers the entire container
            borderRadius: '5px', // add a border radius for styling (optional)
          }}
        />
      </div>
    </div>
  );
};

export default EventDetails;