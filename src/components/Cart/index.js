import LineItem from './LineItem';

const Cart = () => {
  return (
    <div
      className="m-3"
      style={{
        width: 600,
      }}
    >
      <h6>購物欄</h6>
      <LineItem />
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
};

export default Cart;
