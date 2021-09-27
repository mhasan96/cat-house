import React, { useEffect, useState } from "react";
import Donate from "../Donate/Donate";
import Product from "../Product/Product";
import "../Cats/Cats.css";

const Cats = () => {
  const [products, setProducts] = useState([]);
  const [donate, setDonate] = useState([]);
  const [catAdded, setCatAdded] = useState([]);

  useEffect(() => {
    fetch("./fakeCat.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product.name);
    const newDonate = [...donate, product];
    const newCatAdd = [...catAdded, product.name];
    setDonate(newDonate);
    setCatAdded(newCatAdd);
  };
  // Products Container which store all the cards details
  return (
    <div className="container cat-house ">
      <div className="cat-container row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      {/* Store The total calulation details and Cat name  */}
      <div className="donate-conatiner">
        <Donate key={catAdded.id} donate={donate} catAdded={catAdded}></Donate>
      </div>
    </div>
  );
};

export default Cats;
