import useTheme from "../hooks/useTheme"

export default function ThemeSelector() {
  const [theme, setTheme] = useTheme()
  const themes = [
    "default",
    "dark",
    "glassblue",
    "glassgreen",
    "glassyellow",
    "glassyellowTow",
  ]

  return (
    <>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {themes.map((t) => (
          <option key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </option>
        ))}
      </select>
    </>
  )
}
