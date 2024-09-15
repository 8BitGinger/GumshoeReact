import React from 'react';

const StatBox = ({ title, attack, defense, hp, xp }) => {
  return (
    <div className="box2">
      {title} - HP-{hp}. <br />
      Attack - {attack}. Defense - {defense}. <br />
      XP - {xp}.
    </div>
  );
};

export default StatBox;
