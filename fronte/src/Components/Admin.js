import '../Style/main.css';
import { Link } from 'react-router-dom';
function Admin() {
    return (
        <div className='Adminpage'>
            <nav >
                <ul >
                    <li className="underlineHover" type="submit">
                        <Link type="text" to='/Login/create' className='nav-link'>Create</Link>
                    </li>

                    <li className="underlineHover" type="submit">
                        <Link type="text" to='/Login/index' className='nav-link'>Index</Link>
                    </li>
                    <li className="underlineHover" type="submit">
                        <Link type="text" to='/Login/Sold' className='nav-link'>Sold</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Admin;