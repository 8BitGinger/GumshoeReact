import React from 'react';

const CluePStyleItem = ({ upperCase, lowerCase, title, content, tagline }) => {
  return (
    <>
      <li>
        ☙ <span className="highlight">{upperCase}</span>
        {lowerCase}
      </li>
      <p>
        {title}
        <br />
        <br />
        {content}
        <br />
        <br />
        {tagline}
      </p>
    </>
  );
};

export default CluePStyleItem;
