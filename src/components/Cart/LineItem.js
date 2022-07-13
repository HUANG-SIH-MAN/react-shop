/* eslint-disable jsx-a11y/no-static-element-interactions */
import './cart.scss';
import React from 'react';

type LineItemProps = {
  name: string,
  image: string,
  amount: number,
  money: number,
};

const LineItem: React.FC<LineItemProps> = (props) => {
  const { name, image, initAmount, money } = props;
  const [amount, setAmount] = React.useState(initAmount);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const reduceAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  };
  return (
    <div className="m-3 d-flex justify-content-between">
      <img className="product-img" alt="img fail" src={image} />
      <div className="d-flex flex-column justify-content-between mt-2 mb-4">
        <p>{name}</p>
        <div className="d-flex justify-content-between align-items-center amount-control">
          <i className="fa-solid fa-circle-plus fa-lg" onClick={addAmount} />
          <div className="ml-3 mr-3">{amount}</div>
          <i
            className="fa-solid fa-circle-minus fa-lg"
            onClick={reduceAmount}
          />
        </div>
      </div>

      <div className="ml-3 mt-3">{money}</div>
    </div>
  );
};

export default LineItem;
