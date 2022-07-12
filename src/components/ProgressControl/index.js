const ProgressControl = () => {
  return (
    <div
      className="d-flex justify-content-between m-3"
      style={{
        width: 1000,
      }}
    >
      <button type="button" className="btn btn-outline-secondary">
        ← 上一步
      </button>
      <button type="button" className="btn btn-danger">
        → 下一步
      </button>
    </div>
  );
};

export default ProgressControl;
