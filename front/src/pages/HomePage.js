import './../styles/home.css';
import camion from '../pages/istockphoto-1465157700-612x612.jpg'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
          <img src={camion} alt="Camión de carga" style={{ width: '50%' }} />

                </div>
                    <div className="columnas">
                        <div className="bienvenidos left">
                            <h2>Bienvenidos</h2>
                            <p>Tu solución confiable en transporte de carga
En Transporte Elix, nos especializamos en el transporte seguro y eficiente de todo tipo de cargas mediante camiones y camionetas. Ya sea que necesites mover productos, materiales o mercadería, contamos con la flota y el equipo profesional para hacerlo posible.
Conectamos destinos, movemos tu negocio.</p>

                        </div>
                        <div className="testimonios right">
                            <h2>Testimonios</h2>
                            <div className="testimonio">
                                <span className="cita">Simplemente excelente</span>
                                <span className="autor">Juan Perez</span>

                            <h2>Testimonios</h2>
                            <div className="testimonio">
                                <span className="cita">Envios rapidos y confiables</span>
                                <span className="autor">Carmen Gonzalez</span>
                                
                            </div>
                                
                            </div>
                            </div>
                        </div>
                  
                    </main>

    );
    }


    export default HomePage; 