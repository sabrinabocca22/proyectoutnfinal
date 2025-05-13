import Juan from './f.elconfidencial.com_original_62c_e5d_314_62ce5d3141c0b670144a692b7f6a21fa.jpg';
import './../styles/nosotros.css';
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                <p>lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                </div>
                <div className="staff">
                    <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src={Juan} alt="Juan Gomez" style={{ width: '50%' }} /> 
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>

                        </div>
                        </div>
                        </div>
                        </main>
    );
}

export default NosotrosPage;