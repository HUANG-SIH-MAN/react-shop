import LineItem from './LineItem';
import './cart.scss';

const Cart = () => {
  return (
    <div className="cart m-3">
      <h6>購物欄</h6>
      <LineItem
        name="貓咪罐頭"
        image="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb.jpg"
        initAmount={3}
        money={120}
      />
      <LineItem
        name="狗狗罐頭"
        image="https://www.sciencefriday.com/wp-content/uploads/2022/04/pitbull-illustration.jpg"
        initAmount={1}
        money={1345}
      />
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
