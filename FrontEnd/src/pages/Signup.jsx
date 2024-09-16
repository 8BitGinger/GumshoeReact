import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../features/authSlice';
import PenroseHeader from '../components/penroseHeader';
import radio from '../assets/images/neon-sign.jpg';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Signup successful');
        dispatch(login());
        // Assuming createUser action takes email and password
        navigate('/dashboard'); // Redirect to dashboard after successful signup
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1>
          <PenroseHeader />
          Sign Up
        </h1>
        <h3>
          Already a Registered Gumshoe? Click
          <Link to="/login"> here</Link> to Log In!
        </h3>

        <form onSubmit={handleSubmit} className="login-form form">
          <img src={radio} alt="radio" />
          <label htmlFor="title">Sign Up</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
