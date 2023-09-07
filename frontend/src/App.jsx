import "./App.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./components/auth-page";
import Root from "@components/root";
import Login from "@components/Login/Login";
import Home from "@components/Home/Home";
import Information from "@components/Home/Information/Information";
import Work from "@components/Home/Work/Work";
import History from "@components/Home/History/History";
import Personnel from "@components/Home/Personnel/Personnel";
import Department from "@components/Home/Department/Department"
import HumanResource from "@components/Home/HumanResource/HumanResource"
import Move from "@components/Home/Move/Move"
import Settings from "@components/Home/Settings/Settings";
import Form from "@components/Home/Form/Form";

const router = createBrowserRouter([
  {
    path: "/th",
    element: <Root />,
    children: [
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
            element: <Information />
          },
          {
            path: "work",
            element: <Work />
          },
          {
            path: "history",
            element: <History />
          },
          {
            path: "personnel",
            element: <Personnel />
          },
          {
            path: "department",
            element: <Department />
          },
          {
            path: "humanresource",
            element: <HumanResource />
          },
          {
            path: "move",
            element: <Move />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "form",
            element: <Form />
          },
        ]
      },
      {
        path: "/th",
        element: <Navigate to="/th/login" />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/th/login" />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
