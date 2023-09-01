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
    if(user === null) {
      navigate("/th/login")
    }
  }, [])

  const NavMenu = [
    {
      path: `/th/home/information`,
      name: "ข้อมูลส่วนบุคคล",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/home/work`,
      name: "กรอกภาระงาน",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/home/history`,
      name: "ประวัติภาระงาน",
      setting: ["Member", "Agency", "Admin"],
    },
    {
      path: `/th/home/personnel`,
      name: "ประเมินบุคลากร",
      setting: ["Agency", "Admin"],
    },
    {
      path: `/th/home/department`,
      name: "รายงานการประเมิน",
      setting: ["Agency", "Admin"],
    },
    {
      path: `/th/home/humanresource`,
      name: "รายงานการประเมิน / ลา",
      setting: ["Admin"],
    },
    {
      path: `/th/home/move`,
      name: "ย้ายแผนก",
      setting: ["Admin"],
    },
    {
      path: `/th/home/settings`,
      name: "กำหนดสิทธิ์",
      setting: ["Admin"],
    },
    {
      path: `/th/home/form`,
      name: "เปิด / ปิดฟอร์มแบบประเมิน",
      setting: ["Admin"],
    },
  ];

  return (
    <div className="home-container">
      <div className="home-nav-slide">
        <div className="nav-slide-logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="nav-slide-img">
          <img src={user?.img} alt="image" />
        </div>

        <div className="nav-slide-user">
          <p>รหัสพนักงาน: {user?.codeID}</p>
          <p>{user?.name}</p>
          <p>ตำแหน่ง: {user?.position}</p>
        </div>

        <div className="nav-slide-menu">
          {NavMenu.map(
            (item, index) =>
              item.setting.includes(user?.setting) && (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "link active" : "link"
                  }
                >
                  {item.name}
                </NavLink>
              )
          )}
        </div>
      </div>
      <div className="home-box">
        <div className="home-nav-top">
          <a href="" className="home-nav-language">
            <img src={TH} alt="TH" width="30" />
            TH
          </a>
          <a href="/th/login" className="home-nav-logout">
            <BiLogOut size="25px" />
            ออกจากระบบ
          </a>
        </div>
        <div className="home-content">
          <div className="home-content-data">
          <Outlet />
          </div>  
        </div>  
      </div>
    </div>
  );
};

export default Home;
