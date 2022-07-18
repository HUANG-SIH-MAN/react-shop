import React from 'react';
import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Cart from './Cart';
import Footer from './Footer';

const App = () => {
  const [step, setStep] = React.useState(1);
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
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <ProgressControl
        step={step}
        onClickNext={upStep}
        onClickBack={downStep}
      />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
