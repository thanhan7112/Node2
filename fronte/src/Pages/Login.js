import { Link } from "react-router-dom";
import '../Style/main.css';
function Login () {
    return(
        <div className="LoginForm" style={{marginLeft:"35%", marginTop:"5%"}}>
            <nav>
                <ul>
                    <li className="underlineHover" type="submit">
                        <Link type="text" to="/Login/user" className='nav-link'>You are user ?</Link>
                    </li>
                    <li className="underlineHover" type="submit">
                        <Link type="text" to="/Login/admin" className='nav-link'>You are admin ?</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Login;