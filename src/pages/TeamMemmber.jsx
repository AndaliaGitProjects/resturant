import { useOutletContext } from "react-router"

export default function TeamMemmber({ name }) {
  const value = useOutletContext()
  return (
    <div>
      TeamMemmber - {name} - {value}
    </div>
  )
}
