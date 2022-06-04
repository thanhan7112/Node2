import { Link } from "react-router-dom";
import '../Style/main.css';
function Login () {
    return(
        <div className="choose">
        <div className="LoginForm" style={{marginLeft:"35%"}}>
            <nav style={{paddingTop:"10%"}}>
                <ul>
                    <li className="underlineHover" type="submit">
                        <Link type="text" to="/Login/admin" className='nav-link'>Page Admin</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Login;