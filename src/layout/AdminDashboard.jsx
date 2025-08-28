import { useAuth } from "../context/UserContext"

export default function AdminDashboard() {
  const { user } = useAuth()

  return <div>AdminDashboard == {user?.name}</div>
}
