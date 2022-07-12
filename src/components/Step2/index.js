import './step2.scss';

const Step2 = () => {
  return (
    <>
      <h5 className="m-3">運送方式</h5>
      <div className="form-check d-flex justify-content-between m-3 pr-3">
        <div className="d-flex justify-content-start ml-3">
          <input type="radio" value="free" />
          <div className="d-flex flex-column align-items-start directions justify-content-center">
            <p>標準運送</p>
            <p>約3~7個工作天</p>
          </div>
        </div>
        <div>
          <div className="money mt-2">免費</div>
        </div>
      </div>
      <div className="form-check d-flex justify-content-between m-3 pr-3">
        <div className="d-flex justify-content-start ml-3">
          <input type="radio" value="free" />
          <div className="d-flex flex-column align-items-start directions justify-content-center">
            <p>DHL 貨運</p>
            <p>48小時內送達</p>
          </div>
        </div>
        <div>
          <div className="money mt-2">$500</div>
        </div>
      </div>
    </>
  );
};

export default Step2;
