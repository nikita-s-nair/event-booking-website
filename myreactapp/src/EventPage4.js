import React, { useEffect, useState } from 'react';
import circus_1 from '../src/assets/circus_1.jpeg';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventDetails } from './api-helpers/api-helpers';


const EventPage4 = () => {
    const id = useParams().id;
  const navigate = useNavigate();
  console.log(id); 

  const [event, setEvent] = useState('');

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [inputs, setInputs] = useState({user:"" , tickets:""});


  useEffect(()=>{
    console.log("inside useEffect")
    getEventDetails(id)
    .then((res)=>setEvent(res.event))
    .catch((err)=>console.log(err));
    console.log("got details");
    
  },[id]);
  console.log(event);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBack = () => {
    // Go back to the previous page
    navigate(-1);
  };

  const handleBookTickets = () => {
    // Show the booking form
    setShowBookingForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("pls work");
  
    const apiUrl = 'http://localhost:5000/booking';
  
    try {
      console.log("in try");
      console.log('Before fetch');
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventType: event.eventType,
          eventTitle: event.title,
          eventDate: event.eventDate,
          tickets: inputs.tickets,
          user: inputs.user,
        }),
      });
  
      console.log('After fetch');
  
      if (response.ok) {
        // Successfully booked tickets
        const bookingData = await response.json();
        console.log('Booking successful:', bookingData);
  
        alert('Tickets booked successfully');
  
        // Assuming you want to go back to the home page after booking
        navigate('/');
      } else {
        // Failed to book tickets
        const errorData = await response.json();
        console.error('Booking failed:', response.status, response.statusText);
  
        // Handle the error, e.g., display an error message to the user
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during booking:', error);
  
      // Handle the error, e.g., display a generic error message to the user
    }
  
    // Reset the form fields if needed
    setInputs({ user: '', tickets: '' });
    console.log("exiting");
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
        <h1>Jumbo Circus</h1>

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
            Embark on a whimsical journey 'Into the Woods,' a captivating musical that intertwines classic fairy tales. Explore enchanted forests, encounter magical beings, and discover the profound threads of fate.
          </p>
          <p>Date: 27/11/23</p>
          <p>Price: 350 INR</p>
        </div>

        {/* Book Tickets Button */}
        <button
          onClick={handleBookTickets}
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

        {/* Booking Form */}
       
        {showBookingForm && (
             <form onSubmit={handleSubmit}>
          <div>
            <label>User:</label>
            <input
              type="text"
              name="user"
              value={inputs.user}
              onChange={handleChange}
            />
            <br />
            <label>No. of Tickets:</label>
            <input
              type="number"
              name="tickets"
              value={inputs.tickets}
              onChange={handleChange}
            />
            <br />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                display: 'block',
                fontSize: '16px',
                margin: '10px 0',
                backgroundColor: '#df6e94',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Book {inputs.tickets} Tickets
            </button>
          </div>
          </form>
        )}
        
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
          src={circus_1}
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

export default EventPage4;
