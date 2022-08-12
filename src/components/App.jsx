/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Cart from './Cart';
import Footer from './Footer';
import { CartContext } from './CartContext';
import useShoppingCart from '../hooks/useShoppingCart';
import {
  actionUpdateMoney,
  actionSetInitMoney,
  actionSetFare,
} from '../hooks/actions';

const cartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

const App = () => {
  const [state, dispatch] = useShoppingCart();
  const atUpdateMoney = React.useCallback(
    (money) => {
      dispatch(actionUpdateMoney(money));
    },
    [dispatch],
  );

  const atSetInitMoney = React.useCallback(
    (initMoney) => {
      dispatch(actionSetInitMoney(initMoney));
    },
    [dispatch],
  );

  const atSetFare = React.useCallback(
    (fare, fareState) => {
      dispatch(actionSetFare(fare, fareState));
    },
    [dispatch],
  );

  React.useEffect(() => {
    const initMoney = cartItems
      .map((item) => item.price * item.quantity)
      .reduce((a, b) => a + b);
    atSetInitMoney(initMoney);
    return () => {
      atSetInitMoney(0);
    };
  }, [atSetInitMoney]);

  const [step, setStep] = React.useState(1);
  const providerValue = {
    cartItems,
    step,
    state,
    onUpdateMoney: atUpdateMoney,
    onSetFare: atSetFare,
  };

  const downStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const upStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Header />
      <CartContext.Provider value={providerValue}>
        <StepProgress step={step} />
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        <ProgressControl
          step={step}
          onClickNext={upStep}
          onClickBack={downStep}
        />
        <Cart />
      </CartContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
