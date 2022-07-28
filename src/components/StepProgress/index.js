import React from 'react';
import style from './stepProgress.module.scss';

type StepItemProps = {
  step: number,
  name: string,
  stepCss: string,
  itemCss: string,
};

const StepItem: React.FC<StepItemProps> = React.memo((props) => {
  const { step, name, stepCss, itemCss } = props;
  return (
    <div className={`d-flex justify-content-start m-3 ${itemCss}`}>
      <div className={style.step} data-step={stepCss}>
        {step}
      </div>
      <div>{name}</div>
    </div>
  );
});

const StepProgress = React.memo((props) => {
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
        <div className={style.line} />
        <StepItem
          step={step !== 3 ? 2 : '✔'}
          name="運送方式"
          stepCss={
            (step === 1 && 'disable') ||
            (step === 2 && '') ||
            (step === 3 && 'finish')
          }
          itemCss={step === 1 ? style.stepItemDisable : ''}
        />
        <div className={step === 1 ? style.lineDisable : style.line} />
        <StepItem
          step={3}
          name="付款資訊"
          stepCss={step === 3 ? '' : 'disable'}
          itemCss={step === 3 ? '' : style.stepItemDisable}
        />
      </div>
    </>
  );
});

export default StepProgress;
