import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from "../actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css";
import { RootState, Item } from "../types"; // Import the RootState and Item types

const ShoppingCartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrementItem = (item: Item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrementItem = (item: Item) => {
    dispatch(decrementItem(item));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="navbar">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Items
        </Link>
      </div>
      <ul className="cart-items">
        {cartItems.map((item: Item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">₦{item.price}</div>
              <div className="cart-item-quantity">
                <button
                  className="quantity-button"
                  onClick={() => handleDecrementItem(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleIncrementItem(item)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ₦{calculateTotal()}</h3>
    </div>
  );
};

export default ShoppingCartPage;