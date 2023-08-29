import { Outlet, Navigate, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  return (
    <>
      <div>
        {!location.pathname.startsWith("/th") &&
          !location.pathname.startsWith("/en") && <Navigate to="/th/login" />}
        <Outlet />
      </div>
    </>
  );
};

export default Root;
