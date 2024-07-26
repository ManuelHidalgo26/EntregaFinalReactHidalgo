import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
        <p>Gran Burga</p>
        </div>
        <div className="navbar-links">
        <ul>
            <li>
            <a href="#">Menú</a>
            </li>
            <li>
            <a href="#">Arma tu Hamburguesa</a>
            </li>
            <li>
            <a href="#">Sobre Nosotros</a>
            </li>
            <li>
            <a href="#">Contacto</a>
            </li>
        </ul>
        </div>
        <CartWidget/>
    </nav>
    );
};

export default Navbar;