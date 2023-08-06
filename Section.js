import React, { useState } from 'react';
import Card from './Card';

const Section = ({ id, title, cN, cards }) => {
  const [showAllCards, setShowAllCards] = useState(false);

  const visibleCards = showAllCards ? cards : cards.slice(0, 3);

  return (
    <div className={cN} id={id}>
      <h2>{title}</h2>
      {visibleCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      {!showAllCards && (
        <button onClick={() => setShowAllCards(true)}>See More</button>
      )}
    </div>
  );
};

export default Section;
