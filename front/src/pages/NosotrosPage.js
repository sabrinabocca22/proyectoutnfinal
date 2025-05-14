import Juan from './f.elconfidencial.com_original_62c_e5d_314_62ce5d3141c0b670144a692b7f6a21fa.jpg';
import Orlando from './orlando.webp';
import Elizabeth from './63c6ce721d927f1f4b3b843c_1x1 Banner - 6 tips para tus fotos de marca personal.jpg';
import Susana from './Perfil-Profesional-_48-820x1024.webp';


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
                       <div className="persona">
                        <img src={Elizabeth} alt="Elizabeth kroll" style={{ width: '50%' }} /> 
                        <h5>Elizabeth Kroll</h5>
                        <h6>CEO de Elix</h6>
                        <p>Como CEO de Transporte Elix, dirige TransEco, una empresa de transporte de camiones que opera en tres países de Sudamérica. Con una visión centrada en la sostenibilidad, ha modernizado la flota con vehículos de bajas emisiones y ha establecido alianzas estratégicas para la expansión internacional. Su liderazgo ha sido clave para convertir a TransEco en un referente de transporte responsable y eficiente.</p>
                        </div> 
                        <div className="persona">
                        <img src={Susana} alt="Susana Gomez" style={{ width: '50%' }} /> 
                        <h5>Susana Gomez</h5>
                        <h6>CEO de Elix</h6>
                        <p>Como CEO de Transporte Elix, es una líder estratégica con más de 15 años de experiencia en el sector logístico. Como CEO de Transportes Andino, ha optimizado las rutas de carga a nivel nacional, reduciendo costos y tiempos de entrega. Su enfoque en la eficiencia operativa y en la incorporación de tecnologías de seguimiento satelital ha posicionado a la empresa como una de las más confiables en el transporte terrestre de mercancías.

</p>
                        </div> 
                        <div className="persona">
                        <img src={Orlando} alt="Orlando Grisu" style={{ width: '50%' }} /> 
                        <h5>Elias Fernandez</h5>
                        <h6>CEO de Elix</h6>
                        <p>es un emprendedor y CEO de CargaNet, una empresa de transporte de camiones especializada en soluciones tecnológicas. Bajo su liderazgo, la compañía implementó un sistema de gestión de flotas con inteligencia artificial que permite predecir fallos mecánicos y optimizar el mantenimiento. Apasionado por la innovación, Ricardo ha impulsado el crecimiento sostenible del transporte por carretera a través de la digitalización.

</p>
                        </div> 
                        
                        </div>
                        </div>
                    
                        </main>
    );
}

export default NosotrosPage;