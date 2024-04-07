import React from "react";
import { Link } from "react-router-dom";
import { productData } from "./data";
import { Button } from 'antd';
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

const ProdcutList = () => {
  return (
    <>
    <div
      className="carts"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      {productData.map((product, index) => (
        <Card
          style={{ border: "1px solid" }}
          key={index}
          img={product.img}
          discount={product.discount}
          title={product.title}
          link={`/product/${product.id}`}
        />
      ))}


    </div>
    <Link to="/Basket">
    <Button style={{marginTop:"30px",marginLeft:"100px"}} type="primary">سبد خرید</Button>
    </Link>
    </>
  );
};

export default ProdcutList;
