import Header from './Header';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Cart from './Cart';

const App = () => {
  return (
    <div className="App">
      <Header />
      <StepProgress />
      <Step1 />
      <Step2 />
      <Step3 />
      <ProgressControl />
      <Cart />
    </div>
  );
};

export default App;
