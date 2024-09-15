const privateEye = {
  name: 'Private Eye',
  skills: ['+2 to Investigation', '+2 to Perception'],
  attack: 'D10',
  defense: 'D8',
  startingEquipment: ['Magnifying Glass', 'Revolver', 'Cigarettes'],
};

const reporter = {
  name: 'Reporter',
  skills: ['+2 to Investigation', '+2 to Persuasion'],
  attack: 'D8',
  defense: 'D10',
  startingEquipment: ['Utility knife', 'Notepad', 'Press Pass'],
};

const musician = {
  name: 'Musician',
  skills: ['+2 to Performance', '+2 to Persuasion'],
  attack: 'D6',
  defense: 'D12',
  startingEquipment: ['Instrument', 'Knife', 'Psychedelic Mushrooms'],
};

const Gangster = {
  name: 'Gangster',
  skills: ['+2 to Intimidation', '+2 to Deception'],
  attack: 'D12',
  defense: 'D6',
  startingEquipment: ['Tommy Gun', 'Jug of Shine', 'Playing Cards'],
};

const politician = {
  name: 'Politician',
  skills: ['+2 to Persuasion', '+2 to Deception'],
  attack: 'D4',
  defense: 'D20',
  startingEquipment: [
    'Suit',
    'Tahlagio Room Key',
    '$25 Poker Chip to Kenos Casio',
  ],
};

const photographer = {
  name: 'Photographer',
  skills: ['+2 to Performance', '+2 to Investigation'],
  attack: 'D6',
  defense: 'D12',
  startingEquipment: ['Camera', 'Flashlight', 'Knife'],
};

const dancer = {
  name: 'Burlesque Dancer',
  skills: ['+2 to Performance', '+2 to Seduction'],
  attack: 'D8',
  defense: 'D10',
  startingEquipment: ['Feather Boa', 'Poison', 'Opium'],
};

const dealer = {
  name: 'Card Dealer',
  skills: ['+2 to Deception', '+2 to Performance'],
  attack: 'D10',
  defense: 'D8',
  startingEquipment: ['Playing Cards', 'Loaded Dice', 'Knife'],
};

const driver = {
  name: 'Cab Driver',
  skills: ['+2 to Persuasion', '+2 to Driving'],
  attack: 'D8',
  defense: 'D10',
  startingEquipment: ['Car', 'Map', 'Bat'],
};

const gameClasses = [
  privateEye,
  reporter,
  musician,
  Gangster,
  politician,
  photographer,
  dancer,
  dealer,
  driver,
];

export default gameClasses;
