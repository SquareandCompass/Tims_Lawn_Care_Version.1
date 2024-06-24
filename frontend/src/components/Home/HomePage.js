// frontend/src/components/Home/HomePage.js


// Import necessary dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

// Define the Home component
const Home = () => {
  const history = useHistory();
  const isAuth = useSelector(isAuthenticated);

  // Handle login/signup button click
  const handleLoginClick = () => {
    history.push('/login');
  };

  // Handle create account button click
  const handleSignupClick = () => {
    history.push('/signup');
  };

  return (
    <div>
      <h1>Welcome to Tim's Lawn Care!</h1>
      <p>We are your one-stop shop for all your lawn care needs.</p>

      {/* Login/Signup buttons */}
      {!isAuth && (
        <div>
          <Button type="button" onClick={handleLoginClick}>Login</Button>
          <Button type="button" onClick={handleSignupClick}>Create an Account</Button>
        </div>
      )}

      {/* Additional home page content and features */}
      {/* ... */}

      {/* Link to admin page (only visible to authenticated users) */}
      {isAuth && (
        <p>
          <Link to="/admin">Go to Admin Page</Link>
        </p>
      )}
    </div>
  );
};

// Export the Home component
export default Home;
