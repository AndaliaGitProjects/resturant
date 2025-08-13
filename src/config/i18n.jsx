import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ar from "./Locales/ar/translation.json"
import en from "./Locales/en/translation.json"
import homeNavbarEn from "./Locales/en/homeNavbar.json"
import homeNavbarAr from "./Locales/ar/homeNavbar.json"

import dashboardNavEn from "./Locales/en/dashboardNav.json"
import dashboardNavAr from "./Locales/ar/dashboardNav.json"
import dashboardSideEn from "./Locales/en/dashboardSide.json"
import dashboardSideAr from "./Locales/ar/dashboardSide.json"

import { LANG_DISPLAY } from "../components/HomeNavbar"

const value = JSON.parse(localStorage.getItem("LANG_DISPLAY"))

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...en,
        ...homeNavbarEn,
        ...dashboardNavEn,
        ...dashboardSideEn,
      },
    },
    ar: {
      translation: {
        ...ar,
        ...homeNavbarAr,
        ...dashboardNavAr,
        ...dashboardSideAr,
      },
    },
  },
  lng: value || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
