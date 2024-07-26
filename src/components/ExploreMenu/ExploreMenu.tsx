import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

interface ExploreMenuProps {
  category: string;
  setCategory: (category: string) => void;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Choose From a diverse menu featuring a delectable array of dishes
        crafted with the finest ingrediants and culinery expertise. our mission
        is to satisfy your cravings and elevate your dining experience , one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() =>
                setCategory(
                  category === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
