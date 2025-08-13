import { NavLink, Outlet } from "react-router"
import useTranslate from "../hooks/useTranslate"
import { createContext } from "react"
import ThemeSelector from "../components/ThemeSelector"
export const LANG_DISPLAY = "LANG_DISPLAY"
export const LangContext = createContext()
export function HomeNavbar() {
  const { t, lang, cl } = useTranslate()

  return (
    <LangContext.Provider value={{ lang, cl, t }}>
      <div style={{ background: "red" }}>
        <nav>
          <ul
            className="flex  "
            style={{ columnGap: "2rem", flexWrap: "wrap", listStyle: "none" }}
          >
            <li>
              <NavLink to="/">{t("Home")}</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
            {/* <li>
              <NavLink to="/team">Team</NavLink>
            </li> */}
            <li>
              <NavLink to="/userdashboard">{t("nav.dashboard")}</NavLink>
            </li>
            <li>
              <select
                name=""
                id=""
                value={lang}
                onChange={(e) => {
                  cl(e.target.value)
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
      <Outlet></Outlet>
    </LangContext.Provider>
  )
}
