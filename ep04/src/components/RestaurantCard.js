import { RESRO_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

  return (
    <div className="res-card">
      <div className="card">
        <img className="res-logo" src={RESRO_IMG} alt="Biryani" />
        <h3>{name}</h3>
        <p className="cusine">{cuisines.join(", ")}</p>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
