import './step2.scss';
import React from 'react';
import { useCartContext } from '../CartContext';

type TransportMethodProps = {
  method: string,
  day: string,
  money: number,
  state: string,
};

const TransportMethod: React.FC<TransportMethodProps> = React.memo((props) => {
  const { method, day, money, state } = props;
  const { onSetFare } = useCartContext();
  const atRadioChange = (e) => {
    onSetFare(money, e.target.value);
  };
  return (
    <div className="form-check d-flex justify-content-between m-3 pr-3">
      <div className="d-flex justify-content-start ml-3">
        <input
          type="radio"
          value={method}
          checked={method === state}
          onChange={atRadioChange}
        />
        <div className="d-flex flex-column align-items-start directions justify-content-center">
          <p>{method}</p>
          <p>{day}</p>
        </div>
      </div>
      <div>
        <div className="money mt-2">{money ? `$${money}` : '免費'}</div>
      </div>
    </div>
  );
});

const Step2 = React.memo(() => {
  const { state } = useCartContext();
  return (
    <>
      <h5 className="m-3">運送方式</h5>
      <TransportMethod
        method="標準運送"
        day="約3~7個工作天"
        money={0}
        state={state.fareState}
      />
      <TransportMethod
        method="DHL 貨運"
        day="48小時內送達"
        money={500}
        state={state.fareState}
      />
    </>
  );
});

export default Step2;
