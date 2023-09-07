import "./Home.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth-page";
import { BiLogOut } from "react-icons/bi";
import Logo from "../../assets/picture/LogoNav.png";
import TH from "../../assets/picture/TH.png";
import React from "react";

const Home = () => {
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user === null || !user) {
      navigate("/th/login");
    }
  }, []);

  const NavMenu = [
    {
      path: `/th/${user?.codeID}/information`,
      name: "ข้อมูลส่วนบุคคล",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/${user?.codeID}/work`,
      name: "กรอกภาระงาน",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/${user?.codeID}/history`,
      name: "ประวัติภาระงาน",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/${user?.codeID}/personnel`,
      name: "ประเมินบุคลากร",
      setting: ["Agency", "Admin"],
    },
    {
      path: `/th/${user?.codeID}/department`,
      name: "รายงานการประเมิน",
      setting: ["Agency", "Admin"],
    },
    {
      path: `/th/${user?.codeID}/humanresource`,
      name: "รายงานการประเมิน / ลา",
      setting: ["Admin"],
    },
    {
      path: `/th/${user?.codeID}/move`,
      name: "ย้ายแผนก",
      setting: ["Admin"],
    },
    {
      path: `/th/${user?.codeID}/settings`,
      name: "กำหนดสิทธิ์",
      setting: ["Admin"],
    },
    {
      path: `/th/${user?.codeID}/form`,
      name: "เปิด / ปิดฟอร์มแบบประเมิน",
      setting: ["Admin"],
    },
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-nav">
          <div className="home-nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="home-nav-menu">
            <a href="" className="home-menu-language">
              <img src={TH} alt="TH" width="25px" />
              TH
            </a>
            <a href="/th/login" className="home-menu-logout">
              <BiLogOut size="25px" />
              Logout
            </a>
          </div>
        </div>
        <div className="home-data">
          <div className="home-data-nav">
            <div className="home-nav-content">
              <div className="home-nav-img">
                <img src={user?.img} alt="user" />
              </div>
              <div className="home-nav-text">
                <p>รหัสพนักงาน​ : {user?.codeID}</p>
                <p>{user?.name}</p>
                <p>ตำแหน่ง : {user?.position}</p>
              </div>
              <div className="home-nav-page">
                {NavMenu.map(
                  (item, index) =>
                    item.setting.includes(user?.settings) && (
                      <NavLink
                        key={index}
                        to={item.path}
                        className={({ isPending, isActive }) =>
                          isPending
                            ? "home-page-menu pending"
                            : isActive
                            ? "home-page-menu active"
                            : "home-page-menu"
                        }
                      >
                        {item.name}
                      </NavLink>
                    )
                )}
              </div>
            </div>
          </div>
          <div className="home-data-content">
            <div className="home-content-container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
