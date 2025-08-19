import { useEffect, useState } from "react"

export default function useTheme(defaultTheme = "default") {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || defaultTheme
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme == root.getAttribute("theme")) return
    if (document.startViewTransition)
      document.startViewTransition(() => {
        root.setAttribute("theme", "")
        if (theme !== "default") {
          root.setAttribute("theme", theme)
        }
      })
    else {
      root.setAttribute("theme", "")
      if (theme !== "default") {
        root.setAttribute("theme", theme)
      }
    }
    // }
    localStorage.setItem("theme", theme)
  }, [theme])

  return [theme, setTheme]
}
