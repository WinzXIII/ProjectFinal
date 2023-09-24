import "./Home.scss";
import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth-page";
import { BiLogOut } from "react-icons/bi";
import { NavMenu } from "../../assets/function/NavMenu";
import Logo from "../../assets/picture/LogoNav.png";
import TH from "../../assets/picture/TH.png";

const Home = () => {
  const auth = useAuth();
  const user = auth.user;
  const navigate = useNavigate();

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
                <img src={user?.image} alt="user" />
              </div>
              <div className="home-nav-text">
                <p>รหัสพนักงาน​ : {user?.employeeId}</p>
                <p>
                  {user?.name}
                </p>
                <p>ตำแหน่ง : {user?.position}</p>
              </div>
              <div className="home-nav-page">
                {NavMenu.map(
                  (item, index) =>
                    item.setting.includes(user?.role) && (
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
