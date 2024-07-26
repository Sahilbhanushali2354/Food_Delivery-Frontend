import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { StoreContextType, TCartItems } from "../types/input.types";

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<TCartItems>({});
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };
      if (updatedCartItems[itemId] > 1) {
        updatedCartItems[itemId] -= 1;
      } else {
        delete updatedCartItems[itemId];
      }
      return updatedCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let _totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let _itemInfo = food_list.find((product) => product._id === item);
        _itemInfo?.price &&
          (_totalAmount += _itemInfo?.price * cartItems[item]);
      }
    }
    return _totalAmount;
  };

  const contextValue: StoreContextType = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    showLogin,
    setShowLogin,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
