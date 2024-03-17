import React from 'react';

const downloads = () => {
  return (
    <section className="container spacer spacer-top">
      <h3 id="downloads">Downloads</h3>
      <div className="row3">
        <div className="col3">
          <p className="card5 skew">
            <span className="intro overlay2">
              Gumshoe
              <img
                className="avatar3"
                src="src/assets/images/gear.png"
                alt="1930s gear"
              />
              <a href="src/assets/downloads/NeonCity-CharSheet.pdf" download>
                ✓ Character Sheet
              </a>
            </span>
          </p>
        </div>
        <div className="col3">
          <img
            className="logoP"
            src="/src/assets/images/document-logo-sepia2.png"
            alt="gumshoe logo"
          />{' '}
        </div>
      </div>
    </section>
  );
};

export default downloads;
