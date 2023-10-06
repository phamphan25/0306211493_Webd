import React from "react";
import { NavLink } from "react-router-dom";

function Card({ data, addToCart }) {
  const { pic, name, price } = data;

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <>
      <div className="col location">
        <div className="card">
          <img src={pic} className="card-img-top imgcard " alt="Skyscrapers" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <NavLink to="/product-detail2" className="btn btn-primary me2">
              Buy
            </NavLink>
            <button onClick={handleAddToCart} className="btn btn-primary">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
