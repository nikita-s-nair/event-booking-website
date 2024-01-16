import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import SubheaderTable from './SubheaderTable';
import Login from './Login';
import Signup from './signup/signup';
import Plays from './plays';
import Opera from './opera';
import Concert from './concert';
import Comedy from './comedy';
import Circus from './circus';
import './Header.css';
import './App.css';
import Slideshow from './Slideshow';
import EventPage from './EventPage0';
import EventPage4 from './EventPage0';
import EventPage1 from './EventPage1'; 
import Booking from './api-helpers/test';


const Home = () => (
  <div className="body-content">
    <h1 className="sitename"><u>EventScape</u></h1>
    <p className="intro">Welcome to EventScape, a event ticket booking platform, where seamless access to a world of entertainment awaits you. Discover a diverse array of events, from electrifying concerts to captivating theater productions and insightful seminars. With user-friendly navigation, secure payment options, and real-time seat selection, our website ensures a hassle-free ticketing experience. Stay informed with event details, artist bios, and venue information, all at your fingertips. Whether you're a music enthusiast, a theater buff, or a conference-goer, we're your go-to destination for securing your spot at the most sought-after events. Join us and embark on unforgettable experiences, one ticket at a time.</p>
    <br></br><br></br><br></br>
    <hr></hr>
    <h1>Popular Events</h1>
    <div className='slides'>
      <Slideshow />
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>
  </div>
);

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  
  const handleLogin = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
  };

  const handleSignup = (newUser) => {
    console.log('User signed up:', newUser);
  };

  return (
      <div className="App">
      <Header authenticated={authenticated} onLogout={handleLogout} />
        <SubheaderTable />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/Details/:id" element={<EventPage />} />
          <Route path="/CircusDetails/:id" element={<EventPage4 />} />
          <Route path="/EventPage1" element={<EventPage1 />} />
          <Route path="/plays/*" element={<Plays />} />
          <Route path="/opera" element={<Opera />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/circus" element={<Circus />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/booking/:id" element={<Booking />} /> 

        </Routes>
      </div>
  );
}

export default App;