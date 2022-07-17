import './stepProgress.scss';
import React from 'react';

const cssSetting = [
  {
    step_1: 1,
    step_1_Css: 'step',
    step_item_1_css: '',
    line_1: 'line',
    step_2: 2,
    step_2_Css: 'stepDisable',
    step_item_2_css: 'stepItemDisable',
    line_2: 'lineDisable',
    step_3: 3,
    step_3_Css: 'stepDisable',
    step_item_3_css: 'stepItemDisable',
  },
  {
    step_1: '✔',
    step_1_Css: 'stepFinish',
    step_item_1_css: '',
    line_1: 'line',
    step_2: 2,
    step_2_Css: 'step',
    step_item_2_css: '',
    line_2: 'line',
    step_3: 3,
    step_3_Css: 'stepDisable',
    step_item_3_css: 'stepItemDisable',
  },
  {
    step_1: '✔',
    step_1_Css: 'stepFinish',
    step_item_1_css: '',
    line_1: 'line',
    step_2: '✔',
    step_2_Css: 'stepFinish',
    step_item_2_css: '',
    line_2: 'line',
    step_3: 3,
    step_3_Css: 'step',
    step_item_3_css: '',
  },
];

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
      <div className={stepCss}>{step}</div>
      <div>{name}</div>
    </div>
  );
};

const StepProgress = (props) => {
  const { nowStep } = props;
  const [css, setCss] = React.useState(cssSetting[0]);
  React.useEffect(() => {
    switch (nowStep) {
      case 1:
        setCss(cssSetting[0]);
        break;
      case 2:
        setCss(cssSetting[1]);
        break;
      case 3:
        setCss(cssSetting[2]);
        break;
      default:
    }
  }, [nowStep]);
  return (
    <>
      <h4 className="m-3">結帳</h4>
      <div className="d-flex justify-content-start align-items-center">
        <StepItem
          step={css.step_1}
          name="寄送地址"
          stepCss={css.step_1_Css}
          itemCss={css.step_item_1_css}
        />
        <div className={css.line_1} />
        <StepItem
          step={css.step_2}
          name="運送方式"
          stepCss={css.step_2_Css}
          itemCss={css.step_item_2_css}
        />
        <div className={css.line_2} />
        <StepItem
          step={css.step_3}
          name="付款資訊"
          stepCss={css.step_3_Css}
          itemCss={css.step_item_3_css}
        />
      </div>
    </>
  );
};

export default StepProgress;
