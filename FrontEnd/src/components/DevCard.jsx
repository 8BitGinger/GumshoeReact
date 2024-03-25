import React from 'react';
import { Icon } from 'semantic-ui-react';
import devAvatar from '../assets/images/dev-avatar.png';
import PenroseHeader from './penroseHeader';
import { Link } from 'react-router-dom';

const DevCard = () => {
  return (
    <section className="container">
      <h1>
        <PenroseHeader />
        The Developer
      </h1>
      <h3>
        View My Portfolio
        <a target="_blank" id="playerLink" href="https://ryanfann.netlify.app/">
          Click here
        </a>
      </h3>
      <section className="column ">
        <div className="col dev-text spacer">
          <div className="row2">
            <img src={devAvatar} alt="developer avatar" />

            <p>
              <span className="subtitle2 italic bold">
                Ryan "the 8BitGinger" Fann,
              </span>
              <br />
              a full-stack developer with a passion for creating immersive,
              interactive experiences.
              <br />
              <br />
              I specialize in web development, game/graphic design, and digital
              storytelling. <br />
              <br />
              My goal is to create engaging, user-friendly websites that bring
              people together and spark their imagination. <br />
              <br />
              <Link to="/contact">Let&apos;s Talk!</Link>
            </p>
          </div>
          <br />
          <div className="row subtitle2">
            <a target="_blank" href="https://github.com/8BitGinger/">
              <Icon className="icon2" name="github"></Icon>
            </a>
            <a target="_blank" href="https://ryanfann.netlify.app">
              <Icon className="icon2" name="briefcase"></Icon>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ryanfanntastic/"
            >
              <Icon name="linkedin"></Icon>
            </a>
            <a target="_blank" href="https://twitter.com/the8BitGinger">
              <Icon name="twitter"></Icon>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DevCard;
