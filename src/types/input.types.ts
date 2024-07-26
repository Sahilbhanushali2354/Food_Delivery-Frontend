export interface FoodInput {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export interface StoreContextType {
  food_list: FoodInput[];
}

export interface StoreContextType {
  cartItems: TCartItems;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  setCartItems: React.Dispatch<React.SetStateAction<TCartItems>>;
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  getTotalCartAmount: () => void;
}

export interface TCartItems {
  [key: number]: number;
}
