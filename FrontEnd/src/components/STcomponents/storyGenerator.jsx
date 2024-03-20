import React from 'react';
import city1 from '../../assets/images/city1.png';

const storyGenerator = () => {
  return (
    <section id="storyGen">
      <h2>Story Generator</h2>
      <article className="card column">
        <img src={city1} alt="neon city dockside view" />
        <p>
          The Story Generator is a tool to help you create a story for your
          players. It will help you create a setting, characters, and plot hooks
          to get your game started. It is a great tool for when you are running
          out of ideas or just need a little inspiration to make your story come
          to life!
        </p>
      </article>
      <article className="card column">
        <div className="tool">
          <button className="btn btnGen">Generate NPC</button>
          <textarea readOnly></textarea>
        </div>
        <div className="tool">
          <button className="btn btnGen">Generate Location</button>
          <textarea readOnly></textarea>
        </div>
        <div className="tool">
          <button className="btn btnGen">Generate Clue</button>
          <textarea readOnly></textarea>
        </div>
      </article>
    </section>
  );
};

export default storyGenerator;
