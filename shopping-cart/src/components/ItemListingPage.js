import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css";

const ItemListingPage = () => {
  const items = useSelector((state) => state.items);
  const cartItems = useSelector((state) => state.cartItems); // Get the cart items from the state
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2>Available Items</h2>
      <div className="navbar">
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-quantity">{cartItems.length}</span>{" "}
          {/* Display the cart quantity */}
        </Link>
      </div>

      <div className="item-list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₦{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListingPage;
