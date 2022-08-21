import React from "react";
import UserFigure from "./Figure";
import OrderButton from "./OrderButton";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left-container">
        <img src="header-food.jpg" width={500} height={500} />
      </div>
      <div className="header-right-container">
        <h1>Feel the taste of Indian Foods</h1>
        <p>Order the most popular Indian food from anywhere and anytime</p>
        <div className="order-button">
          <OrderButton />
        </div>
        <div className="inner-container">
          <div className="inner-left-container">
            <h2 style={{fontSize:'28px',fontWeight:'600'}}>1.2M+</h2>
            <h4>Happy Customers</h4>
          </div>
          <div className="inner-right-container">
            <img
              src="social-user.png"
              height={40}
              width={40}
              className="rounded"
            />
            This is the best food delivery service that exists!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
