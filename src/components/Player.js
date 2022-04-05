import React from 'react';
import CardList from './CardList';
import { useGameContext } from './GameContext';

export default function Player({ player, hand }) {
  const { to, setTo } = useGameContext();
  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList cards={hand} player={player} />
    </div>
  );
}
