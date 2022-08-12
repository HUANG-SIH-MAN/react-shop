/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';
import style from './cart.module.scss';
import { useCartContext } from '../CartContext';

type LineItemProps = {
  name: string,
  image: string,
  amount: number,
  money: number,
};

const LineItem: React.FC<LineItemProps> = React.memo((props) => {
  const { name, image, initAmount, money } = props;
  const [amount, setAmount] = React.useState(initAmount);
  const { onUpdateMoney } = useCartContext();

  const addAmount = () => {
    setAmount(amount + 1);
    onUpdateMoney(money);
  };

  const reduceAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      onUpdateMoney(-money);
    }
  };
  return (
    <div className="m-3 d-flex justify-content-between">
      <img className={style.product_img} alt="img fail" src={image} />
      <div className="d-flex flex-column justify-content-between mt-2 mb-4">
        <p>{name}</p>
        <div
          className={cx(
            'd-flex',
            'justify-content-between',
            'align-items-center',
            style.amount_control,
          )}
        >
          <i className="fa-solid fa-circle-plus fa-lg" onClick={addAmount} />
          <div className="ml-3 mr-3">{amount}</div>
          <i
            className="fa-solid fa-circle-minus fa-lg"
            onClick={reduceAmount}
          />
        </div>
      </div>

      <div className="ml-3 mt-3">{money * amount}</div>
    </div>
  );
});

export default LineItem;
