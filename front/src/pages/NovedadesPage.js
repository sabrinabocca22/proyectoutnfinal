import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/layout/novedades/novedadItem';


const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
const [novedades, setNovedades] = useState([]);

useEffect(() => {
  const cargarNovedades = async () => {
    setLoading(true);
    // const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades');
    const response = await axios.get('http://localhost:3000/api/novedades');
    setNovedades(response.data);
    setLoading(false);
  };

  cargarNovedades();
}, []);



return (
  <section className="holder">
    {loading ? (
      <p>Cargando...</p>
    ) : (
      novedades.map(item => <NovedadItem key={item.id}
        title={item.nombre} subtitle={item.descripcion}
        imagen={item.imagen} body={item.precio} />)
    )}
  </section>
);
 }

 export default NovedadesPage;