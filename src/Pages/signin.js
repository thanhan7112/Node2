import React, { useState, useEffect } from "react";
// import Admin from "./Admin";
import 'bootstrap/dist/css/bootstrap.min.css';

import './singin.css';

import Admin from "../Components/Admin";
function Signup() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [database, fetchUsers] = useState([])
  const getData = () => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchUsers(res)
      })
  }
  // window.onbeforeunload = function(){ return "Are you sure you want to leave our website?"; };
  useEffect(() => {
    getData()
  }, [])
  const errors = {
    usn: "invalid Email",
    pass: "invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { usn, pass } = document.forms[0];

    //Tìm thông tin đăng nhập của người dùng
    const userData = database.find((user) => user.Email === usn.value);

    // So sánh thông tin người dùng
    if (userData) {
      if (userData.Password !== pass.value) {
        // Mật khẩu không hợp lệ
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // tên người sử dụng không được tìm thấy
      setErrorMessages({ name: "usn", message: errors.usn });
    }
  };

  // Trả ra thông báo lỗi khi được gọi tới thông qua name ( name sẽ gọi đến lỗi pass hoặc usn)
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <center>
          <div>
            <img src="images/signin-image.jpg" alt="signup" />
            <br />
          </div>
        </center>
        <center>
          <div className="fadeIn first">
            <input type="text" className="fadeIn second" id="login" name="usn" required placeholder="Email" />
            {renderErrorMessage("usn")}
          </div>
          <div className="fadeIn first">
            <input id="password" className="fadeIn third" type="Password" name="pass" required placeholder="Password" />
            {renderErrorMessage("pass")}
          </div>
        </center>
        <center>
          <div >
            <input type="submit" value='Login' />
          </div>
        </center>
        <div id="formFooter">
          <p>
            Create account?
            <a href="signup" className="underlineHover">
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
  return (

    <div className="login">
      <div className="login-form">
        {isSubmitted ? <Admin/> : renderForm}
      </div>
    </div>

  );
}

export default Signup;
