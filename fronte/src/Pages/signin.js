import React, { useState, useEffect } from "react";
// import Admin from "./Admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './singin.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/login', {
        Email: Email,
        Password: Password
      });
      navigate('/Login/admin/pageadmin');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (
    <div className="form" >
      <form onSubmit={Auth}>
        <center>
          <img src="/images/signin-image.jpg" alt="signup" />
          <div className="fadeIn first" id="input-with-icon-div" style={{ marginBottom: "3px" }}
            variant="standard">
            <p className="has-text-centered">{msg}</p>
            <input type="text" className="fadeIn second" placeholder="User Name"
              value={Email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="fadeIn first">
            <input placeholder="Password" type="Password" className="fadeIn second" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="fadeIn first">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
          {/* <div id="formFooter">
            <p>
              Create account?
              <a href="/Login/admin/signup" className="underlineHover">
                Sign in here
              </a>
            </p>
          </div> */}
        </center>
      </form>
    </div>

  );
}

export default Signup;
