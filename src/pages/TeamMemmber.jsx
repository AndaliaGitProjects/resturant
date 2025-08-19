import { useLoaderData, useOutletContext } from "react-router"
import TM from "../test.json"
export default function TeamMemmber() {
  const member = useLoaderData()
  // const { userId } = useParams()
  // const memmber = data.find((e) => e.id === Number(userId))
  const value = useOutletContext()
  return (
    <div>
      {/* {typeof userId} */}
      TeamMemmber - {value} {member.name}
    </div>
  )
}
