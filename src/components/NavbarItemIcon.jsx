import { NavLink } from "react-router"

export default function NavbarItemIcon({ children, type = "defualt", to }) {
  return (
    <NavLink
      to={to}
      className={`main-button  nav-button ${
        type === "logout" && "danger-button"
      } `}
    >
      {typeof children == "object" ? children : <span>{children}</span>}
    </NavLink>
  )
}
