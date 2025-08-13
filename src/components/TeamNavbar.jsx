import { NavLink } from "react-router"
import { Link } from "react-router"
import { Outlet } from "react-router"

export default function TeamNavbar() {
  return (
    <>
      <ul style={{ background: "yellow" }}>
        <li>
          <NavLink to="/team/ali">Team - Ali</NavLink>
        </li>
        <li>
          <NavLink to="moh">Team - moh</NavLink>
        </li>
        <li>
          <NavLink to="..">.. Router</NavLink>
        </li>
        <li>
          <NavLink to=".." end>
            .. path
          </NavLink>
        </li>
      </ul>

      <Outlet context="testOutletContext"></Outlet>
    </>
  )
}
