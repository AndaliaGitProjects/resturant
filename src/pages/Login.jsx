import { Form, useActionData, useNavigate, useNavigation } from "react-router"
import FormGroup from "../components/FormGroup"
import { loginAuth } from "../api/auth"
import { toast } from "react-toastify"
import { loginValidator } from "../utils/validators/loginValidator"
import { useAuth } from "../context/UserContext"
import { useEffect } from "react"
// eslint-disable-next-line react-refresh/only-export-components
function Login() {
  const actionData = useActionData()
  const { state } = useNavigation()
  const { login } = useAuth()
  const navigate = useNavigate()
  const isSubmitting = state === "submitting"

  useEffect(() => {
    if (actionData?.user) {
      login(actionData.user)
      if (actionData.user.role === "admin") navigate("/admindashboard")
      else navigate("/userdashboard")
    }
  }, [actionData?.user, navigate, login])

  return (
    <>
      <div className="flex flex-grow-1 flex-center">
        <Form method="post">
          <FormGroup errors={actionData?.emailError}>
            <label htmlFor="email">Email :: =</label>
            <input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup errors={actionData?.passwordError}>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" />
          </FormGroup>
          <button disabled={isSubmitting}>
            {isSubmitting ? "loging..." : "login"}
          </button>
          <input type="checkbox" name="stay-login" />
        </Form>
      </div>
      <dialog></dialog>
    </>
  )
}

async function action({ request }) {
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  // // Await the 3-second delay for submitting
  // await delay(3000)
  const loginData = await request.formData()
  const email = loginData.get("email")
  const password = loginData.get("password")
  const [emailError, passwordError] = loginValidator({ email, password })
  if (emailError.length > 0 || passwordError > 0)
    return { emailError, passwordError }

  try {
    const login = await loginAuth(
      { signal: request.signal },
      { email, password }
    )
    if (login.success) {
      // document.cookie = `token=${login.token}; max-age=3600;`
      localStorage.setItem("token", login.token)
      toast.success("u scuu login")
      return { user: login.data }
    }
  } catch (e) {
    console.log(e.response)
    if (e.response && !e.response?.data.success) {
      console.log("sds")
      toast.error(e.response?.data?.error + e.status)
    }
    throw e
  }
}

export const loginRoute = {
  element: <Login />,
  action,
}
