import cx from 'classnames';
import React from 'react';
import LineItem from './LineItem';
import style from './cart.module.scss';
import { useMyContext } from '../CartContext';

const Cart = React.memo(() => {
  const { cartItems } = useMyContext();
  return (
    <div className={cx(style.cart, 'm-3')}>
      <h6>購物欄</h6>
      {cartItems.map((item) => {
        return (
          <LineItem
            key={item.id}
            name={item.name}
            image={item.img}
            initAmount={item.quantity}
            money={item.price}
          />
        );
      })}
      <hr />
      <div className="d-flex justify-content-between">
        <p>運費</p>
        <p>1000</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p>小計</p>
        <p>1000</p>
      </div>
    </div>
  );
});

export default Cart;
