import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

interface TProp {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

const FoodItem: React.FC<TProp> = ({ id, name, price, description, image }) => {
  // debugger
  // console.log("--storecontext", StoreContext);
  const { cartItems, addToCart, removeFromCart }:any = useContext(StoreContext);

  // console.log("--cart", id);
  // console.log("--cart", cartItems);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="remove"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
