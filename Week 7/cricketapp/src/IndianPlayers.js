import React from 'react';

const IndianPlayers = () => {
  const team = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];

  const oddTeam = team.filter((_, index) => index % 2 === 0);
  const evenTeam = team.filter((_, index) => index % 2 !== 0);

  const T20players = ['Virat', 'Rohit', 'Gill'];
  const RanjiTrophy = ['Pujara', 'Rahane', 'Saha'];

  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
