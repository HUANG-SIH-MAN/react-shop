import './ProgressControl.scss';

const ProgressControl = (props) => {
  const { step, onClickNext, onClickBack } = props;
  return (
    <div className="d-flex justify-content-between m-3 progressControl">
      {step !== 1 && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onClickBack}
        >
          ← 上一步
        </button>
      )}

      <button type="button" className="btn btn-danger" onClick={onClickNext}>
        {step !== 3 ? '→ 下一步' : '確認下單'}
      </button>
    </div>
  );
};

export default ProgressControl;
