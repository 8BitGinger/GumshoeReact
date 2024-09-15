import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

import PenroseHeader from '../components/penroseHeader';
import radio from '../assets/images/neon-sign.jpg';

const Login = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.logged);
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Sign in successful');
        dispatch(login());
        navigate('/dashboard'); // Dispatch login action only after successful response
      } else {
        // Handle sign-in error (e.g., display error message)
        console.log('Sign in failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1>
          <PenroseHeader />
          Login
        </h1>
        <form
          className="form login-form"
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleSignIn(email, password);
          }}
        >
          <img src={radio} alt="radio" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button className="btn" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
