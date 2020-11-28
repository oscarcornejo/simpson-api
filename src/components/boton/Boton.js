import React from 'react';

import './Boton.css';

const Boton = (props) => {
  const { RefreshPersonaje } = props;

  const cambiarPersonaje = () => {
    RefreshPersonaje();
  };

  return <button onClick={cambiarPersonaje}>Refrescar Personaje</button>;
};

export default Boton;
