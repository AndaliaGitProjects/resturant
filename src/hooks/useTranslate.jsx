import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { LANG_DISPLAY } from "../layout/HomeNavbarLayout"
// eslint-disable-next-line no-unused-vars
import i18n from "../config/i18n"
export default function useTranslate() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState(() => {
    const localStogareValue = JSON.parse(localStorage.getItem(LANG_DISPLAY))
    if (localStogareValue) return localStogareValue
    else return "en"
  })
  useEffect(() => {
    localStorage.setItem(LANG_DISPLAY, JSON.stringify(lang))
    document.dir = i18n.dir(i18n.language)
    // if (lang == "ar") document.dir = "rtl"
    // else document.dir = "ltr"
  }, [i18n, lang])

  function cl(e) {
    setLang(e)
    i18n.changeLanguage(e)
  }
  return { translate: t, language: lang, changeLanguage: cl }
}
