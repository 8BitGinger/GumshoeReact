import React from 'react';
import city1 from '../../assets/images/city1.png';
import CharacterList from './CharacterList';
import PenroseHeader from '../penroseHeader';

const storyGenerator = () => {
  return (
    <section id="storyGen">
      <h1>
        <PenroseHeader />
        Story Generator
      </h1>
      <article className="card column">
        <img src={city1} alt="neon city dockside view" />
        <p>
          The Story Generator is a tool to help you create a story for your
          players. It will help you create a NPCs, random locations, and Clues
          to get your game started. It is a great tool for when you are running
          out of ideas or just need a little inspiration to make your story come
          to life!
        </p>
      </article>
      <article className="toolCard">
        <CharacterList />

        <button className="btn btnGen">Generate Location</button>
        <ul>
          <li>
            <h4>Location Name</h4>
            <p>
              Location description Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Inventore, odit facilis suscipit adipisci nulla
              porro eius. Laboriosam ipsa libero laudantium, quibusdam quidem,
              fugit repellendus consequuntur quod, eos aliquam nulla! Maiores?
            </p>
          </li>
        </ul>

        <button className="btn btnGen">Generate Clue</button>
        <ul>
          <li>
            <h4>Clue Name</h4>
            <p>
              Clue Info Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Inventore, odit facilis suscipit adipisci nulla porro eius.
              Laboriosam ipsa libero laudantium, quibusdam quidem, fugit
              repellendus consequuntur quod, eos aliquam nulla! Maiores?
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default storyGenerator;
