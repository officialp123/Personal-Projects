import { Item, Data } from "../types"; 

const initialState: Data = require("../data.json");

const cartReducer = (state: Data = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem: Item = action.payload;
      const existingItem = state.cartItems.find(
        (item: Item) => item.id === newItem.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item: Item) =>
            item.id === existingItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: Item) => item.id !== action.payload.id
        ),
      };

    case "INCREMENT_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item: Item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item: Item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;