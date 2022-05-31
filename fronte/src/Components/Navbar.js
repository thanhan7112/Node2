import '../Style/main.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/About' className='nav-link'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Menu' className='nav-link'>Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Login' className='nav-link'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;