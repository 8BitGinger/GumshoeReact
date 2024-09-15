import React from 'react';

const MaroonInfographic = (info) => {
  return (
    <section className="cardWide">
      <ul className="stripe">
        {info.info.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default MaroonInfographic;
