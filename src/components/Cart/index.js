import cx from 'classnames';
import React from 'react';
import LineItem from './LineItem';
import style from './cart.module.scss';
import { useCartContext } from '../CartContext';

const Cart = React.memo(() => {
  const { cartItems, total, step, fare } = useCartContext();
  return (
    <div className={cx(style.cart, 'm-3')}>
      <h6>購物欄</h6>
      <h6>目前購物進度：第{step}步</h6>
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
        <p>{fare || '免費'}</p>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p>小計</p>
        <p>{total + fare}</p>
      </div>
    </div>
  );
});

export default Cart;
