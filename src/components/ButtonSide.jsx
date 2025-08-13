import { NavLink } from "react-router"

export default function ButtonSide({ children, title, to }) {
  return (
    <NavLink to={to} end title={title} className="side-button main-button">
      {children}
    </NavLink>
  )
}
