import React, { useState } from "react";
import { Button, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { productData } from "./data";

const Product = () => {
  const { productId } = useParams();

  const firstpage = useNavigate();

  const handleBuy = () => {
    message.info(`شما ${many} خریدید`);
    saveToLocalStorage(product, many);
    firstpage("/");
  };

  const [many, setMany] = useState(1);

  const [isChanged, setIsChanged] = useState(false);

  const handleIncrease = () => {
    setMany((prevMany) => prevMany + 1);
  };

  const handleDecrease = () => {
    if (many > 1) {
      setMany((prevMany) => {
        setIsChanged((prev) => {
          setFolan(true)
          return true;
        });

        return prevMany - 1;
      });
    }
  };

  const product = productData.find((item) => item.id == productId);

  const saveToLocalStorage = (product, quantity) => {
    const item = {
      productId: product.id,
      title: product.title,
      quantity,
    };

    const existingItems = localStorage.getItem("basketItems");
    let basketItems = existingItems ? JSON.parse(existingItems) : [];
    basketItems.push(item);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "500px",
          marginTop: "20%",
          border: "1px solid gray",
          padding: "30px",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={product.img}
            alt="Carts"
            style={{ borderRadius: "30px", width: "200px", height: "200px" }}
          />
          <div
            style={{
              display: "block",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "100px",
            }}
          >
            <h1 className="title">{product.title}</h1>
            <p className="discount">{product.discount} تومان</p>
            <Button onClick={handleBuy}>خرید</Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "30px",
              }}
            >
              <Button onClick={handleDecrease} style={{ marginRight: "10px" }}>
                -
              </Button>
              <p>{many}</p>
              <Button onClick={handleIncrease} style={{ marginLeft: "10px" }}>
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
