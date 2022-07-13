import './stepProgress.scss';
import React from 'react';

type StepItemProps = {
  step: number,
  name: string,
};

const StepItem: React.FC<StepItemProps> = (props) => {
  const { step, name } = props;
  return (
    <div className="d-flex justify-content-start m-3 ">
      <div className="step">{step}</div>
      <div>{name}</div>
    </div>
  );
};

const StepProgress = () => {
  return (
    <>
      <h4 className="m-3">結帳</h4>
      <div className="d-flex justify-content-start align-items-center">
        <StepItem step={1} name="寄送地址" />
        <div className="line" />
        <StepItem step={2} name="運送方式" />
        <div className="line" />
        <StepItem step={3} name="付款資訊" />
      </div>
    </>
  );
};

export default StepProgress;
