import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../state';
const cart = () => {
  const cart = useSelector((state: State) => state.cart);
  console.log(cart);
  return (
    <div>
      {cart.ProductsInCart.map((product) => {
        return (
          <div>
            <h1>{product.title}</h1>
            <h2>{product.amount}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default cart;
