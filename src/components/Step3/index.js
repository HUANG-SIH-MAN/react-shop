import React from 'react';

const Step3 = React.memo(() => {
  return (
    <>
      <h5 className="m-3">付款資訊</h5>
      <form className="m-3 row">
        <div className="name col-7 mb-3">
          <div className="label mb-1">持卡人姓名</div>
          <input className="form-control" type="text" placeholder="John Doe" />
        </div>
        <div className="card-number col-7 mb-3">
          <div className="label mb-1">卡號</div>
          <input
            className="form-control"
            type="text"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className="form-group  col-12 row mb-3">
          <div className="expire col-4">
            <div className="label mb-1">有效期限</div>
            <input className="form-control" type="text" placeholder="MM/YY" />
          </div>
          <div className="CVC col-4">
            <div className="label mb-1">CVC/CCV</div>
            <input className="form-control" type="text" placeholder="123" />
          </div>
        </div>
      </form>
    </>
  );
});

export default Step3;
