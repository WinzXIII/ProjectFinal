import { Outlet, Navigate, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  const path = location.pathname.split("/");

  console.log(path)

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
