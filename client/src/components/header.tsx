import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul>
            <li className="logo nav-link">FAKELANDIA</li>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/misdemeanours" className="nav-link">Misdemeanours</Link>
            </li>
            <li>
              <Link to="/confession" className="nav-link">Confess To Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
