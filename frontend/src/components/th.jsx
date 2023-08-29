import Login from "./TH/Login/Login";
import Home from "./TH/Home/Home";
import Information from "./TH/Home/Infomation/Information";
import Work from "./TH/Home/Personnel/Personnel";
import History from "./TH/Home/History/History";
import Personnel from "./TH/Home/Personnel/Personnel";
import Department from "./TH/Home/Department/Department";
import HumanResource from "./TH/Home/HumanResource/HumanResource";
import Move from "./TH/Home/Move/Move";
import Settings from "./TH/Home/Settings/Settings";
import Form from "./TH/Home/Form/Form";

export const TH = [
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
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "personnel",
        element: <Personnel />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "humanresource",
        element: <HumanResource />,
      },
      {
        path: "move",
        element: <Move />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
];
