import './step2.scss';
import React from 'react';

type TransportMethodProps = {
  method: string,
  day: string,
  money: string,
};

const TransportMethod: React.FC<TransportMethodProps> = (props) => {
  const { method, day, money } = props;
  return (
    <div className="form-check d-flex justify-content-between m-3 pr-3">
      <div className="d-flex justify-content-start ml-3">
        <input type="radio" value="free" />
        <div className="d-flex flex-column align-items-start directions justify-content-center">
          <p>{method}</p>
          <p>{day}</p>
        </div>
      </div>
      <div>
        <div className="money mt-2">{money}</div>
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <>
      <h5 className="m-3">運送方式</h5>
      <TransportMethod method="標準運送" day="約3~7個工作天" money="免費" />
      <TransportMethod method="DHL 貨運" day="48小時內送達" money="$500" />
    </>
  );
};

export default Step2;
