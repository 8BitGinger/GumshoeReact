import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Landing = () => {
  return (
    <>
      <header className="header" id="landing">
        <Link to="/home">
          <Spline scene="https://prod.spline.design/BfM7yoUC3C3vMheS/scene.splinecode" />
        </Link>
      </header>
    </>
  );
};

export default Landing;
