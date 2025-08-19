import { NavLink, useLoaderData, useNavigation } from "react-router"
import { Outlet } from "react-router"
// import TM from "../test.json"
export default function TeamNavbar() {
  const TM = useLoaderData()
  const { state } = useNavigation()
  return (
    <>
      <ul style={{ background: "yellow" }}>
        {TM.map((team) => {
          return (
            <li key={team.id}>
              <NavLink to={String(team.id)}>Team - {team.name}</NavLink>
            </li>
          )
        })}
      </ul>

      {state === "loading" ? "loading" : <Outlet></Outlet>}
    </>
  )
}
