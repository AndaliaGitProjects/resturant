import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router"

export default function SignUp() {
  const navigate = useNavigate()
  const navigater = useCallback(() => {
    navigate("/")
  }, [navigate])
  useEffect(() => {
    const a = () => {
      navigater()
    }
    setTimeout(a, 1000)
    return () => {
      clearTimeout(a)
    }
  })

  return <div>SignUp rediriet to home in 1s</div>
}
