import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { HomeNavbar } from "./components/HomeNavbar"
import Team from "./pages/Team"
import TeamMemmber from "./pages/TeamMemmber"
import TeamNavbar from "./components/TeamNavbar"
import DashboardUserLayout from "./pages/DashboardUserLayout"
import Main from "./pages/Main"
import Catigores from "./pages/Categories"
import Setting from "./pages/Setting"
import AccountSetting from "./pages/AccountSetting"

const router = createBrowserRouter([
  {
    element: <HomeNavbar></HomeNavbar>,
    children: [
      {
        path: "/userdashboard",
        element: <DashboardUserLayout></DashboardUserLayout>,
        children: [
          { path: "*", element: <h1>Page not Found 404</h1> },

          { index: true, element: <Main></Main> },
          { path: "catigores", element: <Catigores></Catigores> },
          { path: "setting", element: <Setting></Setting> },
          { path: "profile", element: <AccountSetting></AccountSetting> },
        ],
      },
      { path: "*", element: <h1>Page not Found 404</h1> },
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/team",
        element: <TeamNavbar></TeamNavbar>,
        children: [
          { index: true, element: <Team></Team> },
          { path: "ali", element: <TeamMemmber name="Ali"></TeamMemmber> },
          { path: "moh", element: <TeamMemmber name="moh"></TeamMemmber> },
        ],
      },
    ],
  },
])

export default router
