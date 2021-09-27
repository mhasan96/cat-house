import React from "react";
import "../Product/Product.css";
const Product = (props) => {
  const { name, gender, picture, origin, price, age } = props.product;
  return (
    <div className="col cat-list ">
      <div className="card  shadow p-3 mb-5 cat-list2 card-size">
        <img src={picture} className="card-img-top cat-image" alt="..." />
        <div className="card-body">
          <h6 className="card-title">Breed: {name}</h6>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Origin: {origin}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Age: {age}</p>
          <button
            onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-danger btn-donate"
          >
            <i className="fas fa-shopping-cart"></i> Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
