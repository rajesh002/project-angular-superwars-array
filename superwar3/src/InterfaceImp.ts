import { gameInterface } from './gameInterface';

export const players: string[] = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo',
];

export const playerInfo: gameInterface[] = players.map((value, index) => ({
  name: players[index],
  strength: Math.ceil(Math.random() * 100 + 1),
  image: '../../assets/super-' + (index + 1) + '.png',
  type: 'hero|villian',
}));

function buildPlayers(players: any, type: string): any {
  let fragment: string = '';
  let indexList: number[] = [];
  if (type == 'hero') {
    players.map((item, index) => {
      if (index % 2 == 0) indexList.push(index);
    });
  } else {
    players.map((item, index) => {
      if (index % 2 != 0) indexList.push(index);
    });
  }
  console.log(indexList);

  fragment += indexList.map(
    (index) => `<div class="player">
                <img src="${players[index].image}" alt="">
                <div class="name">${players[index].name}</div>
                <div class="strength">${players[index].strength}</div></div>`
  );
  return fragment;
}

window.onload = () => {
  document.getElementById('heroes').innerHTML = buildPlayers(
    playerInfo,
    'hero'
  );
  document.getElementById('villains').innerHTML = buildPlayers(
    playerInfo,
    'villain'
  );
};
