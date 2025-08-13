import svg from "../assets/restaurant-logo-design-vector.jpg"
export default function ResturantInfo({ name }) {
  return (
    <>
      <div className="resturantInfo  flex flex-center flex-d-column  ">
        <img src={svg} alt="" className="resturantInfo-image border-4" />
        {name}
      </div>
    </>
  )
}
