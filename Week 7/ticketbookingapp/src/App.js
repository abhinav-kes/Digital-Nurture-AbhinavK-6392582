import React, { useState } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Greeting from './components/Greeting';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <>
          <LogoutButton onClick={handleLogoutClick} />
          <UserPage />
        </>
      ) : (
        <>
          <LoginButton onClick={handleLoginClick} />
          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;
