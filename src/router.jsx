import {
  createBrowserRouter,
  Navigate,
  redirect,
  useRouteError,
} from "react-router-dom"

import Home from "./pages/Home"
import { loginRoute } from "./pages/Login"
import SignUp from "./pages/SignUp"
import TeamMemmber from "./pages/TeamMemmber"
import Team from "./pages/Team"
import Main from "./pages/Main"
import Setting from "./pages/Setting"
import Catigores from "./pages/Categories"
import DashboardUserLayout from "./layout/DashboardUserLayout"
import AccountSetting from "./pages/AccountSetting"

import TeamNavbar from "./components/TeamNavbar"
import { HomeNavbarLayout } from "./layout/HomeNavbarLayout"
import AdminDashboard from "./layout/AdminDashboard"

const router = createBrowserRouter([
  {
    element: <HomeNavbarLayout></HomeNavbarLayout>,
    errorElement: <Error></Error>,
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
      {
        path: "admindashboard",
        element: <AdminDashboard />,
      },
      {
        path: "*",
        element: (
          <>
            redirect to home
            <Navigate to="/team"></Navigate>
          </>
        ),
      },

      { path: "/", element: <Home></Home> },
      { path: "/login", ...loginRoute },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/team",
        element: <TeamNavbar></TeamNavbar>,
        loader: async ({ request: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {
            signal,
          })
        },
        children: [
          { index: true, element: <Team></Team> },
          {
            path: ":userId",
            element: <TeamMemmber></TeamMemmber>,
            loader: async ({ request: { signal }, params }) => {
              const res = await fetch(
                `https://jsonplaceholder.typicode.com/users/${params.userId}`,
                { signal }
              )
              if (params.userId > 3) throw redirect("/team")
              if (res.status === 200) return res.json()
              else throw redirect("/team")
            },
          },
          // { path: "moh", element: <TeamMemmber></TeamMemmber> },
        ],
      },
    ],
  },
])

// eslint-disable-next-line react-refresh/only-export-components
function Error() {
  const err = useRouteError()
  console.log(err)
  return (
    <>
      {/* 503 Service Unavailable */}
      <div>somthing went wrong</div>
      {err.message} - {err.name} - {err.code}
      <br />
      <pre>{err.stack}</pre>
    </>
  )
}

export default router
