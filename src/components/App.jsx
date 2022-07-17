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
  const [next, setNext] = React.useState('→ 下一步');

  React.useEffect(() => {
    if (step === 3) {
      setNext('確認下單');
    } else {
      setNext('→ 下一步');
    }
  }, [step]);

  const downStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const upStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  return (
    <div className="App">
      <Header />
      <StepProgress nowStep={step} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={downStep}
        >
          ← 上一步
        </button>
      )}

      <button type="button" className="btn btn-danger" onClick={upStep}>
        {next}
      </button>
      <ProgressControl />
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
