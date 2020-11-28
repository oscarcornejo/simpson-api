import React from 'react';
import Loading from '../loading/Loading';

import './Card.css';

const Card = (props) => {
  const { personaje, loading } = props;
  const { character, image, quote } = personaje;

  return (
    <div className='card'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='card-header'>
            <h2>{character}</h2>
          </div>

          <div className='card-content'>
            <img src={image} alt={character} />
            <p>{quote}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
