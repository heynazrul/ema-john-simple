import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let shippingCharge = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + tax + shippingCharge;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shippingCharge}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
