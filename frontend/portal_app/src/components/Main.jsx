import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark  rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Stock prediction portals utilize artificial intelligence, machine
            learning (LSTM networks), and technical analysis to forecast stock
            trends, offering tools for portfolio management, sentiment analysis,
            and real-time data tracking. Key platforms include Tickeron, Simply
            Wall St, StockEdge, and specialized AI-based tools, which help
            investors identify market opportunities and predict future prices.
          </p>
          <Button text="login" class="btn-info"/>
        </div>
      </div>  
    </>
  );
};
export default Main;
