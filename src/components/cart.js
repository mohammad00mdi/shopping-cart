import React from "react";
import { Link } from "react-router-dom";
import { productData } from "./data";

const Card = ({ img, discount, title, link }) => (
  <Link to={link} style={{ textDecoration: "none" }}>
    <div
      className="card"
      style={{
        border: "1px solid gray",
        padding: "30px",
        borderRadius: "30px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={img}
          alt="Carts"
          style={{ borderRadius: "30px", width: "200px", height: "200px" }}
        />
        <h1 className="title">{title}</h1>
        <p className="discount">{discount}</p>
      </div>
    </div>
  </Link>
);

const Cart = () => {
  

  return (
    <div
      className="carts"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      {productData.map((cart, index) => (
        <Card
          style={{ border: "1px solid" }}
          key={index}
          img={cart.img}
          discount={cart.discount}
          title={cart.title}
          link={cart.link}
        />
      ))}
    </div>
  );
};

export default Cart;
