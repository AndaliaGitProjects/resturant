import StyledHeader from "../components/StyledHeader"
// import useTranslate from "../hooks/useTranslate"
import { LangContext } from "../layout/HomeNavbarLayout"
import { useContext } from "react"
import ThemeSelector from "../components/ThemeSelector"
export default function Setting() {
  // const { lang, cl } = useTranslate()
  const { language, changeLanguage } = useContext(LangContext)
  return (
    <div className="Main">
      <StyledHeader>Setting</StyledHeader>
      <select
        value={language}
        onChange={(e) => {
          changeLanguage(e.target.value)
        }}
      >
        <option value="en">🚲 English</option>
        <option value="ar"> Arabic</option>
      </select>

      <ThemeSelector></ThemeSelector>
    </div>
  )
}
