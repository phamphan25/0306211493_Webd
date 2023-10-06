import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item !== product);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeFromCart(item)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
