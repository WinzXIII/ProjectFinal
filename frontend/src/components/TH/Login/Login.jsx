import "./Login.scss";
import React from "react";
import TH from "../../../assets/picture/TH.png";
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
      navigate(`/th/${user.codeID}/information`);
    } else if (username && password) {
      usernameEl.classList.add("alert");
      passwordEl.classList.add("alert");
      setAlert(true);
      setText("ไอดีหรือรหัสผ่านไม่ถูกต้อง");
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
      setText("กรุณากรอกข้อมูล");
      setAlert(true);
    }
  };

  return (
    <div className="container">
      {/* navbar */}
      <nav>
        <ul>
          <li>
            <a href={`/en/login`}>
              <img src={TH} alt="TH" width="30px" />
              TH
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
          <div className="box-text">ระบบประเมินผลการปฏิบัติงาน</div>

          {/* input-data */}
          <div className="box-input">
            <div className="input-user">
              ID ผู้ใช้
              <input
                className="user"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-pass">
              รหัสผ่าน
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
              เข้าสู่ระบบ
            </button>
            <a href="/th">ลืมรหัสผ่าน</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
