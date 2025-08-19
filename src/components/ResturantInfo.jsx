import svg from "../assets/restaurant-logo-design-vector.jpg"
export default function ResturantInfo({ name }) {
  return (
    <>
      <div className="resturantInfo   ">
        <img alt="resturant Logo" src={svg} className="resturantInfo-image " />
        <div className="resturantInfo-title">{name} - مزايا</div>
      </div>
    </>
  )
}
