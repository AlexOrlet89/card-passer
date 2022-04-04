import React from 'react';
import Card from './Card';
import { useGameContext } from './GameContext';

export default function CardList({ cards, player }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.suit + card.value} card={card} player={player} />
      ))}
    </div>
  );
}
