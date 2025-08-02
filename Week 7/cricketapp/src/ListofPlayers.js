// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'Shubman Gill', score: 66 },
    { name: 'KL Rahul', score: 74 },
    { name: 'Hardik Pandya', score: 45 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'Shreyas Iyer', score: 71 },
    { name: 'Jasprit Bumrah', score: 50 },
    { name: 'Mohammed Shami', score: 30 },
    { name: 'Kuldeep Yadav', score: 76 },
    { name: 'Rishabh Pant', score: 95 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score &lt; 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
