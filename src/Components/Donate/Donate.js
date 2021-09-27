import React from "react";
import "../Donate/Donate.css";
// import "../Product/Product";

//Caltulate the total Donation
const Donate = (props) => {
  const { donate } = props;
  console.log(donate.id);
  let total = 0;
  for (const product of donate) {
    total = total + product.price;
  }

  // const newCat = props.catAdded.map(kkk) =>

  // Show Cat Name in The Cart
  const { catAdded } = props;
  let catName = [];
  for (const product of catAdded) {
    catName = catName + product;
    console.log(catAdded);
  }

  return (
    <div key={donate.id} className="donate-list">
      <h3 className="donate-head" key={catAdded.id}>
        Total Added Cat: {props.donate.length}
      </h3>
      <h5 key={catAdded.id}>
        Total Donation: <span>$</span>
        {total}
      </h5>
      <ul key={donate.id}>
        {catAdded.map((product) => (
          <li key={product.id}>{product} </li>
        ))}
      </ul>
    </div>
  );
};

export default Donate;
