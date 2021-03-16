import React from "react";

export default function OrderSubmit() {
  return (
    <div className="order-submit-panel">
      <div className="cost-items-container">
        <div className="cost-item d-flex justify-space-between">
          <div className="item-title">delivery fee</div>
          <div className="item-cost">Free</div>
        </div>
        <div className="cost-item d-flex justify-space-between">
          <div className="item-title">total price</div>
          <div className="item-cost">108.4 $</div>
        </div>
      </div>
      <button
        className="checkout-btn"
        onClick={() => console.log("checkout clicked...")}
      >
        checkout
      </button>
    </div>
  );
}
