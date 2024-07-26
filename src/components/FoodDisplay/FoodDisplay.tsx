import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { FoodInput } from "../../types/input.types";

interface TProp {
  category: string;
}

const FoodDisplay: React.FC<TProp> = ({ category }) => {
  const { food_list, cartItems, addToCart, removeFromCart }: any =
    useContext(StoreContext);

  console.log("CATEGORY", category, cartItems, addToCart, removeFromCart);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item: FoodInput, index: number) => {
          console.log("click category", item.category);

          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
            // } if(category="All") {
            //   return (
            //     <FoodItem
            //       key={index}
            //       id={item._id}
            //       name={item.name}
            //       price={item.price}
            //       description={item.description}
            //       image={item.image}
            //     />
            //   );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
