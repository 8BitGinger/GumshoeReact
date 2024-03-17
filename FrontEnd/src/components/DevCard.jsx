import React from 'react';
import { Icon } from 'semantic-ui-react';

const DevCard = () => {
  return (
    <section className="container">
      <h1>
        <img
          id="page-top spin"
          className="page-top spin"
          src="src/assets/images/penrosev1.png"
          alt="penrose triangle"
        />
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
            <img
              src="src/assets/images/dev-avatar.png"
              alt="developer avatar"
            />

            <p>
              I'm <span className="subtitle2">Ryan Fann, the 8BitGinger,</span>{' '}
              a full-stack developer with a passion for creating immersive,
              interactive experiences.
              <br />
              <br />
              I specialize in web development, game/graphic design, and digital
              storytelling. <br />
              <br />
              My goal is to create engaging, user-friendly applications that
              bring people together and spark their imagination. <br />
              <br />
              <a href="mailto:ryan.fann@gmail.com">Let&rsquo;s chat!</a>
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
            <a target="_blank" href="https://twitter.com/fanninthevan">
              <Icon name="twitter"></Icon>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DevCard;
