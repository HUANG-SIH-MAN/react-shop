import './stepProgress.scss';
import React from 'react';

type StepItemProps = {
  step: number,
  name: string,
  stepCss: string,
  itemCss: string,
};

const StepItem: React.FC<StepItemProps> = (props) => {
  const { step, name, stepCss, itemCss } = props;
  return (
    <div className={`d-flex justify-content-start m-3 ${itemCss}`}>
      <div className="step" data-step={stepCss}>
        {step}
      </div>
      <div>{name}</div>
    </div>
  );
};

const StepProgress = (props) => {
  const { step } = props;
  return (
    <>
      <h4 className="m-3">結帳</h4>
      <div className="d-flex justify-content-start align-items-center">
        <StepItem
          step={step === 1 ? 1 : '✔'}
          name="寄送地址"
          stepCss={step === 1 ? '' : 'finish'}
          itemCss=""
        />
        <div className="line" />
        <StepItem
          step={step !== 3 ? 2 : '✔'}
          name="運送方式"
          stepCss={
            (step === 1 && 'disable') ||
            (step === 2 && '') ||
            (step === 3 && 'finish')
          }
          itemCss={step === 1 ? 'stepItemDisable' : ''}
        />
        <div className={step === 1 ? 'lineDisable' : 'line'} />
        <StepItem
          step={3}
          name="付款資訊"
          stepCss={step === 3 ? '' : 'disable'}
          itemCss={step === 3 ? '' : 'stepItemDisable'}
        />
      </div>
    </>
  );
};

export default StepProgress;
