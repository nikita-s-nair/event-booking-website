import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // New state to track login status
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'http://localhost:5000/user/login';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successfully logged in
        const userData = await response.json();
        console.log('Login successful:', userData);

        // Update login status
        setLoginStatus('logged in');

        alert('Logged In');

        // You can handle further actions, such as redirecting the user
        navigate('/'); // Example: Redirect to the dashboard
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.error);

        // Update login status
        setLoginStatus('unable to login');

        alert('Unable to login');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);

      // Update login status
      setLoginStatus('unable to login');
    }

    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button" style={{
            
            alignItems: "center",
            border: "1px solid #762033",
            borderRadius: "4px",
            color: "#762033",
            backgroundColor: "#e28b97",
            cursor: "pointer"}
          }>
            Login
          </button>
        </form>

        {/* Display login status message */}
        {loginStatus && (
          <div className={loginStatus === 'logged in' ? 'success-message' : 'error-message'}>
            {loginStatus === 'logged in' ? 'Logged In' : 'Unable to Login'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
