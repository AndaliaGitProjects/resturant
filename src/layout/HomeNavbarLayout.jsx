import { Outlet } from "react-router"
import { createContext } from "react"
import { Flip, ToastContainer } from "react-toastify"
import HomeNavbar from "../components/HomeNavbar"
import useTranslate from "../hooks/useTranslate"
import AuthContext from "../context/UserContext" //componenet
export const LANG_DISPLAY = "LANG_DISPLAY"

// eslint-disable-next-line react-refresh/only-export-components
export const LangContext = createContext()
export function HomeNavbarLayout() {
  const { changeLanguage, language, translate } = useTranslate()
  return (
    <AuthContext>
      <LangContext.Provider value={{ language, changeLanguage, translate }}>
        <HomeNavbar></HomeNavbar>
        <Outlet></Outlet>
        <ToastContainer transition={Flip} />
      </LangContext.Provider>
    </AuthContext>
  )
}
