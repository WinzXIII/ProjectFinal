import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/auth-page";
import Root from "./components/root";
import { TH } from "./components/th";
import { EN } from "./components/en";

const router = createBrowserRouter([
  {
    path: "/th",
    element: <Root />,
    children: TH,
  },
  {
    path: "/en",
    element: <Root />,
    children: EN,
  },
  {
    path: "*",
    element: <Root />,
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
