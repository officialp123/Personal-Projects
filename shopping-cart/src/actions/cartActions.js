export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const incrementItem = (item) => ({
  type: "INCREMENT_ITEM",
  payload: item,
});

export const decrementItem = (item) => ({
  type: "DECREMENT_ITEM",
  payload: item,
});
