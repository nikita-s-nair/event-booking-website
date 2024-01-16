import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
const labelStyle = { mt: 1, mb: 1 };


const Authform = () => {
  
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Assuming you have a signup endpoint like '/api/signup'
    const apiUrl = 'http://localhost:5000/user/signup';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Successfully signed up
        const userData = await response.json();
        console.log('Signup successful:', userData);

        alert('Signed Up');

        navigate('/');
      } else {
        // Failed to sign up
        const errorData = await response.json();
        console.error('Signup failed:', errorData.error);

        // Handle the error, e.g., display an error message to the user
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during signup:', error);

      // Handle the error, e.g., display a generic error message to the user
    }

    // Reset the form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type={"text"}
              name="name"
              value={name}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type={"email"}
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type={"password"}
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button" style={{
            
            alignItems: "center",
            border: "1px solid #762033",
            borderRadius: "4px",
            color: "#762033",
            backgroundColor: "#e28b97",
            cursor: "pointer"}
          }>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authform;