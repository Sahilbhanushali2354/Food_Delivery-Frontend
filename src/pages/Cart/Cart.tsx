import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { FoodInput } from "../../types/input.types";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, food_list, removeFromCart, getTotalCartAmount }: any =
    useContext(StoreContext);

  return (
    <div className="cart">
      {Object.keys(cartItems).length === 0 ? (
        <h2>No Product is Added To Cart</h2>
      ) : (
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item: FoodInput) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p
                      className="cross"
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
      )}
      {Object.keys(cartItems).length ? (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalCartAmount() + 2}</p>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed To Checkout
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If You have a promo code,Enter It Here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
