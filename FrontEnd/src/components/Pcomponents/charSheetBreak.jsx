import React from 'react';
import MaroonInfographic from '../Reuseable/Home/MaroonInfographic';

const charSheetBreak = () => {
  const bulletPoints = [
    'HP - Hit Points. When taking damage you remove the total from your Total HP. When this drops to -10 you meet your end.',
    'XP - Experience Points are earned by completing missions, defeating foes, and finding clues. It can be spent to increase skills or HP.',
    'Luck - Gain Luck by completing Missions, defeating enemies, and solving clues. You can spend these points and add them to your luck roll. Every 10 Luck Points apply a +1 to Percent Roll. A player can spend 100 Luck points to re-roll an unfavorable roll.',
    'Attack - This represents which dice you roll for your attack rolls. D4 - D20.',
    'Defense - This represents which dice you roll for your defense rolls. D4 - D20.',
  ];

  return (
    <>
      <h2>Character Sheet Breakdown</h2>
      <MaroonInfographic info={bulletPoints} />
    </>
  );
};

export default charSheetBreak;
