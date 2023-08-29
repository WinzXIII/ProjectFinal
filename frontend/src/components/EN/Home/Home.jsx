import "./Home.scss";
import { Outlet, NavLink, useNavigate, useLocation, Navigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useAuth } from "../../auth-page";
import Logo from "../../../assets/picture/LogoNav.png";
import EN from "../../../assets/picture/EN.png";

const Home = () => {
  const auth = useAuth();
  const user = auth?.user;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  const Logout = () => {
    auth.logout();
    navigate("/en/login");
  };

  const navData = [
    {
      name: "Personal information",
      path: `/en/${user?.codeID}/information`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "Workload",
      path: `/en/${user?.codeID}/work`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "Workload history",
      path: `/en/${user?.codeID}/history`,
      position: ["Member", "Agency", "Admin"],
    },
    {
      name: "Assess personnel",
      path: `/en/${user?.codeID}/personnel`,
      position: ["Agency", "Admin"],
    },
    {
      name: "Assessment Report",
      path: `/en/${user?.codeID}/department`,
      position: ["Agency", "Admin"],
    },
    {
      name: "Assessment Report / Leave",
      path: `/en/${user?.codeID}/humanresource`,
      position: ["Admin"],
    },
    {
      name: "Move department",
      path: `/en/${user?.codeID}/move`,
      position: ["Admin"],
    },
    {
      name: "Set permissions",
      path: `/en/${user?.codeID}/settings`,
      position: ["Admin"],
    },
    {
      name: "Assessment form setup",
      path: `/en/${user?.codeID}/form`,
      position: ["Admin"],
    },
  ];

  return (
    <div className="container">
      {!user?.codeID && <Navigate to="/th/login" />}
      {/* Nav-Top */}
      <div className="nav-bar">
        <ul>
          <li className="nav-logo">
            <img src={Logo} alt="Logo" width="180px" />
          </li>
          <div className="nav-between">
            <li className="nav-language" onClick={() => navigate(`/th/${user.codeID}/${path[3]}`)}>
              <div className="nav-button">
                <img src={EN} alt="EN" width="30px" />
                EN
              </div>
            </li>
            <li className="nav-logout" onClick={() => Logout()}>
              <div className="nav-button">
                <BiLogOut size="25px" />
                Logout
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
            <p>Employee ID: {user?.codeID}</p>
            <p>{user?.name}</p>
            <p>Position: {user?.position}</p>
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
