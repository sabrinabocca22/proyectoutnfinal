import Juan from './f.elconfidencial.com_original_62c_e5d_314_62ce5d3141c0b670144a692b7f6a21fa.jpg';
import './../styles/nosotros.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Todo comenzó en el año 2005, cuando Elías Fernández, un apasionado por los caminos y la logística, decidió comprar su primer camión con la idea de ofrecer un servicio de transporte más humano, puntual y confiable. Con solo un vehículo y muchas ganas de crecer, nació Transporte Elix.

Los primeros años fueron desafiantes. Recorriendo cientos de kilómetros por semana, Elías se encargaba personalmente de cada entrega, construyendo una reputación basada en la responsabilidad, el compromiso y el respeto por cada cliente. Gracias a esa dedicación, las recomendaciones no tardaron en llegar.

Con el tiempo, la empresa fue creciendo. Se incorporaron nuevos vehículos, más conductores y una pequeña oficina operativa. Hoy, Transporte Elix cuenta con una flota moderna de camiones y camionetas, equipada para responder a las distintas necesidades del transporte de cargas en todo el país.

Lo que comenzó como un sueño personal se convirtió en una empresa sólida, que mantiene sus valores de origen: compromiso, seguridad y cercanía con el cliente.

Seguimos en movimiento, porque entendemos que transportar no es solo llevar cosas de un lugar a otro: es cumplir promesas y conectar personas.</p>
                
                </div>
                <div className="staff">
                    <h2>Fundador de la empresa</h2>
                <div className="personas">
                    <div className="persona">
                        <img src={Juan} alt="Juan Gomez" style={{ width: '50%' }} /> 
                        <h5>Juan Gomez</h5>
                        <h6>CEO de Elix</h6>
                        <p>Como CEO de Transporte Elix, me enorgullece liderar un equipo comprometido con la excelencia en cada envío.Desde nuestros inicios, hemos trabajado con el objetivo de brindar un servicio de transporte confiable, seguro y adaptado a las necesidades de cada cliente. Creemos que el crecimiento se construye con responsabilidad, y por eso invertimos continuamente en mejorar nuestra flota, capacitar a nuestro personal y mantener una atención cercana</p>
                        </div>
                        </div>
                        </div>
                        </main>
    );
}

export default NosotrosPage;