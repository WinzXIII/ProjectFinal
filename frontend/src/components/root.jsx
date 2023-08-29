import { Outlet, Navigate, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <div>
        {location.pathname.startsWith("/th") && <Navigate to="/th/login" />}
        {location.pathname.startsWith("/en") && <Navigate to="/en/login" />}
        {!location.pathname.startsWith("/th") && !location.pathname.startsWith("/en") && <Navigate to="/th/login" />}
        <Outlet />
      </div>
    </>
  );
};

export default Root;
