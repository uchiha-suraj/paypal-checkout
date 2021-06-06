import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function App() {

  // to dynamically change the price 
  // const [price, setPrice] = useState(0);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            // value: price,
            value: "0.01",
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    return actions.order.capture();
  }

  return (
    <div className="app">
      <div className = "wrapper">
        {/* <input type = "number" onChange = {e => setPrice(e.target.value)} value = {price} /> */}
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}

export default App;
