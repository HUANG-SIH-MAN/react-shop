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
  const initMoney = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b);
  const [step, setStep] = React.useState(1);
  const [total, setTotal] = React.useState(initMoney);
  const [fare, setFare] = React.useState(0);
  const [fareState, setFareState] = React.useState('標準運送');
  const providerValue = {
    cartItems,
    total,
    setTotal,
    step,
    fare,
    setFare,
    fareState,
    setFareState,
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
      <StepProgress step={step} />
      {step === 1 && <Step1 />}
      <CartContext.Provider value={providerValue}>
        {step === 2 && <Step2 />}
      </CartContext.Provider>
      {step === 3 && <Step3 />}
      <ProgressControl
        step={step}
        onClickNext={upStep}
        onClickBack={downStep}
      />
      <CartContext.Provider value={providerValue}>
        <Cart />
      </CartContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
