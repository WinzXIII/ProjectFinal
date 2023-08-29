import { Navigate } from "react-router-dom";
import Login from "./EN/Login/Login";
import Home from "./EN/Home/Home";
import Information from "./EN/Home/Infomation/Information";
/* import Work from "./EN/Home/Personnel/Personnel";
import History from "./EN/Home/History/History";
import Personnel from "./EN/Home/Personnel/Personnel";
import Department from "./EN/Home/Department/Department";
import HumanResource from "./EN/Home/HumanResource/HumanResource";
import Move from "./EN/Home/Move/Move";
import Settings from "./EN/Home/Settings/Settings";
import Form from "./EN/Home/Form/Form";
 */
export const EN = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: ":id",
    element: <Home />,
    children: [
      {
        path: "information",
        element: <Information />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/en/login" />
  }
];
