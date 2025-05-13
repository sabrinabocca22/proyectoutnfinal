import logo from '../layout/logo192.png';




const Header = (props) => {
    return (
      <header>
        <div className="holder">
        <img src={logo} alt="Logo de Transportes X" width="100" />
          <h1>Transportes</h1>
        </div>
      </header>
    );
  }
  
  export default Header;
  