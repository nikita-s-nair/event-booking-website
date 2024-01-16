// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ authenticated, onLogout }) => {
  const [username, setUsername] = React.useState('');

  const handleLogout = () => {
    onLogout();
    setUsername('');
  };
   
  return (
    <header className="header">
      <div className="logo">EventScape</div>
      <div className="header-links">
        {authenticated ? (
          <div>
            Welcome, {username}!
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="loginlink">Login</Link>
            <Link to="/signup" className="signuplink">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;