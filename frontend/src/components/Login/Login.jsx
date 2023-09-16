import "./Login.scss";
import React from "react";
import TH from "../../assets/picture/TH.png";
import Logo from "../../assets/picture/LogoTechno.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-page";
import { LoginFaile } from "../../assets/function/Function";

const Login = () => {
  const [onValid, setOnValid] = React.useState(false);
  const [dataUser, setDataUser] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/technopolis/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res) {
          navigate("/th/home");
          auth.login(res?.data);
        }
      })
      .catch((err) => {
        LoginFaile();
        setOnValid(true);
        console.error(err);
      });
  };

  return (
    <div className="log-container">
      {/* Navbar */}
      <nav className="log-nav">
        <ul className="log-ul">
          <a href="" className="log-li">
            <img src={TH} alt="th" width="35px" />
            TH
          </a>
        </ul>
      </nav>

      {/* Content */}
      <div className="log-box-container">
        <form onSubmit={handleSubmit} className="log-box-border">
          <div className="log-box-logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="log-box-text">ระบบประเมินผลการปฏิบัติงาน</div>

          <div className="log-box-input">
            <div className="log-input">
              <label>ID ผู้ใช้</label>
              <input
                className="user"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="log-input">
              <label>รหัสผ่าน</label>
              <input
                className="pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {onValid ? <p>ID หรือ รหัสผ่านผิด</p> : ""}
            </div>
          </div>

          <div className="log-box-submit">
            <button className="submit" type="submit">
              เข้าสู่ระบบ
            </button>
            <button className="forget" type="button">
              ลืมรหัสผ่าน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
