import React from 'react';

const Card = ({ id, card_title, data_type, data_value, button, button_name, link, note }) => {
  return (
    <div className="card" id={id}>
      <h3>{card_title}</h3>
      {data_type === 'progress' && <progress value={data_value} max="100"></progress>}
      {data_type === 'number' && <p>Number: {data_value}</p>}
      {data_type === 'text' && <p>{data_value}</p>}
      {data_type === 'image' && <img src={data_value} alt={card_title} />}
      {button && <button>{button_name}</button>}
      {link && <a href={link}>Link</a>}
      {note && <p>Note: {note}</p>}
    </div>
  );
};

export default Card;
