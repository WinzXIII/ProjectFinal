import "./Login.scss";
import React from "react";
import EN from "../../../assets/picture/EN.png";
import Logo from "../../../assets/picture/LogoTechno.png";
import Person from "../../../assets/data/Person";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth-page";

const Login = () => {
  const [alert, setAlert] = React.useState(false);
  const [text, setText] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const auth = useAuth();
  
  const Login = () => {
    const user = Person.find((user) => user.codeID === username);
    const usernameEl = document.querySelector(".user");
    const passwordEl = document.querySelector(".pass");

    if (user && user.password === password) {
      auth.login(user);
      navigate(`/en/${user.codeID}/information`);
    } else if (username && password) {
      usernameEl.classList.add("alert");
      passwordEl.classList.add("alert");
      setAlert(true);
      setText("Invalid ID or Password");
    } else {
      if (username === "" && password === "") {
        usernameEl.classList.add("alert");
        passwordEl.classList.add("alert");
      } else if (username === "") {
        usernameEl.classList.add("alert");
        passwordEl.classList.remove("alert");
      } else {
        passwordEl.classList.add("alert");
        usernameEl.classList.remove("alert");
      }
      setText("Please fill out");
      setAlert(true);
    }
  };

  return (
    <div className="container">
      {/* navbar */}
      <nav>
        <ul>
          <li>
            <a href={`/th/login`}>
              <img src={EN} alt="EN" width="30px" />
              EN
            </a>
          </li>
        </ul>
      </nav>

      {/* content */}
      <div className="box">
        <div className="box-content">
          {/* logo */}
          <div className="box-logo">
            <img src={Logo} alt="Logo" width="300px" />
          </div>

          {/* text-header */}
          <div className="box-text">Performance Appraisal System</div>

          {/* input-data */}
          <div className="box-input">
            <div className="input-user">
              ID User
              <input
                className="user"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-pass">
              Password
              <input
                className="pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {alert ? <p>{text}</p> : ""}
            </div>
          </div>

          {/* submit */}
          <div className="box-submit">
            <button type="submit" onClick={() => Login()}>
              Login
            </button>
            <a href="/th">Forget Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
