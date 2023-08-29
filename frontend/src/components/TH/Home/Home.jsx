import "./Home.scss";
import { Outlet, NavLink, useNavigate, useLocation, Navigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../auth-page";
import Logo from "../../../assets/picture/LogoNav.png";
import TH from "../../../assets/picture/TH.png";

const Home = () => {
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  const Logout = () => {
    auth.logout();
    navigate("/th/login");
  };

  const navData = [
    {
      name: "ข้อมูลส่วนบุคคล",
      path: `/th/${user?.codeID}/information`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "กรอกภาระงาน",
      path: `/th/${user?.codeID}/work`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "ประวัติภาระงาน",
      path: `/th/${user?.codeID}/history`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "ประเมินบุคลากร",
      path: `/th/${user?.codeID}/personnel`,
      position: ["Agency", "Admin"],
    },
    {
      name: "รายงานการประเมิน",
      path: `/th/${user?.codeID}/department`,
      position: ["Agency", "Admin"],
    },
    {
      name: "รายงานการประเมิน / ลา",
      path: `/th/${user?.codeID}/humanresource`,
      position: ["Admin"],
    },
    {
      name: "ย้ายแผนก",
      path: `/th/${user?.codeID}/move`,
      position: ["Admin"],
    },
    {
      name: "กำหนดสิทธิ์",
      path: `/th/${user?.codeID}/settings`,
      position: ["Admin"],
    },
    {
      name: "ตั้งค่าฟอร์มประเมิน",
      path: `/th/${user?.codeID}/form`,
      position: ["Admin"],
    },
  ];

  return (
    <div className="container">
      {!user && !user?.codeID && <Navigate to="/th/login" />}
      {/* Nav-Top */}
      <div className="nav-bar">
        <ul>
          <li className="nav-logo">
            <img src={Logo} alt="Logo" width="180px" />
          </li>
          <div className="nav-between">
            <li
              className="nav-language"
              onClick={() => navigate(`/en/${user.codeID}/${path[3]}`)}
            >
              <div className="nav-button">
                <img src={TH} alt="TH" width="30px" />
                TH
              </div>
            </li>
            <li className="nav-logout" onClick={() => Logout()}>
              <div className="nav-button">
                <BiLogOut size="25px" />
                ออกจากระบบ
              </div>
            </li>
          </div>
        </ul>
      </div>
      <div className="set-page">
        {/* Nav-Left */}
        <div className="nav-silde">
          <div className="nav-logo">
            <img src={user?.img} alt="Person" width="100%" />
          </div>

          <div className="nav-data">
            <p>รหัสพนักงาน: {user?.codeID}</p>
            <p>{user?.name}</p>
            <p>ตำแหน่ง: {user?.position}</p>
          </div>

          <div className="nav-button">
            {navData?.map(
              (item, index) =>
                item.position.includes(user?.setting) && (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "data pending"
                        : isActive
                        ? "data active"
                        : "data"
                    }
                  >
                    {item.name}
                  </NavLink>
                )
            )}
          </div>
        </div>

        {/* content */}
        <div className="content">
          <div className="content-box">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
