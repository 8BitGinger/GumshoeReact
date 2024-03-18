import React from 'react';

const stDownloads = () => {
  return (
    <div className="overlay spacer" id="top">
      <section id="intro" className="container intro">
        <h3 id="downloads">Downloads</h3>
        <p className="twin"></p>
        <div className="card5 skew">
          <span className="col">
            <img
              className="avatar3"
              src="src/assets/images/gear.png"
              alt="1930s gear"
            />

            <a href="src/assets/images/docs/NeonCity-CharSheet.pdf" download>
              ✓ Character Sheet
            </a>

            <a
              href="src/assets/images/docs/NeonCity-StarterAdventure.pdf"
              download
            >
              ✓ Starter Adventure
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default stDownloads;
