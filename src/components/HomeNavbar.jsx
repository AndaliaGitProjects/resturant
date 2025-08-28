import React, { useContext } from "react"
import { LangContext } from "../layout/HomeNavbarLayout"
import ThemeSelector from "./ThemeSelector"
import { NavLink } from "react-router"
export default function HomeNavbar() {
  const { translate, language, changeLanguage } = useContext(LangContext)

  return (
    <div className="background-primary-color flex flex-center">
      <nav>
        <ul
          className="flex  "
          style={{ columnGap: "2rem", flexWrap: "wrap", listStyle: "none" }}
        >
          <li>
            <NavLink to="/admindashboard">admin</NavLink>
          </li>
          <li>
            <NavLink to="/">{translate("nav.home")}</NavLink>
          </li>
          <li>
            <NavLink to="/login">{translate("nav.login")}</NavLink>
          </li>
          <li>
            <NavLink to="/signup">{translate("nav.signup")}</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/userdashboard">{translate("nav.dashboard")}</NavLink>
          </li>
          <li>
            <select
              name=""
              id=""
              value={language}
              onChange={(e) => {
                changeLanguage(e.target.value)
              }}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </li>
          <li>
            <ThemeSelector></ThemeSelector>
          </li>
        </ul>
      </nav>
    </div>
  )
}
