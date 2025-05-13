import './../styles/home.css';
import avion from '../pages/avion-binter.jpeg'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
            <img src={avion} alt="Avión de carga" style={{ width: '50%' }} />
                </div>
                    <div className="columnas">
                        <div className="bienvenidos left">
                            <h2>Bienvenidos</h2>
                            <p>lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>

                        </div>
                        <div className="testimonios right">
                            <h2>Testimonios</h2>
                            <div className="testimonio">
                                <span className="cita">Simplemente excelente</span>
                                <span className="autor">Juan Perez</span>
                            </div>
                        </div>
                    </div>
                    </main>

    );
    }

    export default HomePage; 