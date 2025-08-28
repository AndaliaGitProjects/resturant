import { createContext, useContext, useState } from "react"
// import { useNavigate } from "react-router"

const userContext = createContext()
const authContext = function ({ children }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(null)

  function login(user) {
    setUser(user)
  }
  function logout() {
    if (user) {
      setUser(null)
      localStorage.removeItem("token")
      // document.cookie = "token=; max-age=0;"
      // navigate("/login")
    }
  }
  return (
    <userContext.Provider value={{ user, login, logout }}>
      {children}
    </userContext.Provider>
  )
}
export function useAuth() {
  return useContext(userContext)
}
export default authContext
