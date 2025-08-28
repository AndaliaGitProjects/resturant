export function loginValidator({ email, password }) {
  const emailError = []
  const passwordError = []
  if (email === "") emailError.push("Email Required")
  if (!email.endsWith("@gmail.com"))
    emailError.push("email must End with @gmail.com")

  if (password === "") passwordError?.push("password Required")

  return [emailError, passwordError]
}
