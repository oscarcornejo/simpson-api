import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/card/Card';
import Boton from '../components/boton/Boton';

const Home = () => {
  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(false);

  /**
   * @Hook {Hook para cargar un personaje al moemnto de montarse el componente}
   */
  useEffect(() => {
    // console.log('Montado!');
    getData();
  }, []);

  /**
   * @function {Método para obtener un personaje}
   */
  const getData = () => {
    setLoading(true);
    
    const urlApi = 'https://thesimpsonsquoteapi.glitch.me/quotes';

    axios.get(urlApi).then((response) => {
      console.log('El personaje es:', response.data);
      
      setTimeout(() => {
        setPersonaje(response.data[0]);
        setLoading(false);
      }, 1000);
    });
  };

  /**
   * @function {Método para refrescar un personaje}
   */
  const RefreshPersonaje = () => {
    getData();
  };

  /**
   * @return {El Return renderiza el componente}
   */
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Card personaje={personaje} loading={loading} />
      <Boton RefreshPersonaje={RefreshPersonaje} />
    </div>
  );
};

export default Home;
