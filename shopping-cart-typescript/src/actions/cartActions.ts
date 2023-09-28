import { Item } from "../types"; 

export const addToCart = (item: Item) => ({
  type: "ADD_TO_CART" as const,
  payload: item,
});

export const removeFromCart = (item: Item) => ({
  type: "REMOVE_FROM_CART" as const,
  payload: item,
});

export const incrementItem = (item: Item) => ({
  type: "INCREMENT_ITEM" as const,
  payload: item,
});

export const decrementItem = (item: Item) => ({
  type: "DECREMENT_ITEM" as const,
  payload: item,
});