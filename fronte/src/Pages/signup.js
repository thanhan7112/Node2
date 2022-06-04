import React, { useState } from 'react'
import './singin.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Signin = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [MobileNumber, setMobileNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/regist', {
        MobileNumber: MobileNumber,
        Name: Name,
        Email: Email,
        Password: Password,
        confPassword: confPassword
      });
      navigate("/Login/admin/pageadmin");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="form" >
      <form onSubmit={Register}>
        <center>
          <img src="/images/signup-image.jpg" alt="signup" />
          <div className="fadeIn first" id="input-with-icon-div" style={{ marginBottom: "3px" }}
            variant="standard">
            <input type="text" className="fadeIn second" placeholder="User Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="fadeIn first">
            <input placeholder="Your Phone Number" type="text" className="fadeIn second" value={MobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)} />
          </div>
          <div className="fadeIn first">
            <input placeholder="Email" type="text" className="fadeIn second" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="fadeIn first">
            <input placeholder="Password" type="Password" className="fadeIn second" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="fadeIn first">
            <input placeholder="Password" type="Password" className="fadeIn second" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
          </div>
          <div className="fadeIn first">
            <input type="submit" value="Register User" className="btn btn-primary" />
          </div>
          {/* <div id="formFooter">
            <p>
              Have already an account?
              <a href="/Login/admin" className="underlineHover">
                Sign in here
              </a>
            </p>
          </div> */}
        </center>
      </form>
    </div>

  );
}
// }
export default Signin;