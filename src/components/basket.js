import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const [basketItems, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    const updatedBasketItems = basketItems.filter(
      (item) => item.productId !== productId
    );
    setBasketItems(updatedBasketItems);
    localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
  };

  const handleGoToFirstPage = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        // display: "flex",
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
        <table>
          <thead>
            <tr>
              <th>عنوان</th>
              <th>تعداد</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((item) => (
              <tr key={item.productId}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button onClick={() => handleRemove(item.productId)}>
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button style={{ marginTop: "20px" }}>پرداخت</Button>
      </div>
      <Button
        style={{ marginTop: "30px", marginLeft: "100px" }}
        onClick={handleGoToFirstPage}
      >
        برو به صفحه اول
      </Button>
    </div>
  );
};

export default Basket;
