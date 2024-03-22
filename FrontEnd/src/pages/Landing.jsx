import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Landing = () => {
  return (
    <>
      <div className="backer">
        <header className="header" id="landing">
          <Link to="/">
            <Spline
              className="splineVid"
              scene="https://prod.spline.design/BfM7yoUC3C3vMheS/scene.splinecode"
            />
          </Link>
        </header>
      </div>
    </>
  );
};

export default Landing;
