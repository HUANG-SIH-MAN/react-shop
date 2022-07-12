const LineItem = () => {
  return (
    <div className="m-3 d-flex justify-content-between">
      <img
        style={{
          width: 200,
          height: 200,
        }}
        alt="img fail"
        src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb.jpg"
      />
      <div className="d-flex flex-column justify-content-between mt-2 mb-4">
        <p>貓咪罐頭</p>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            width: 200,
          }}
        >
          <i className="fa-solid fa-circle-plus fa-lg" />

          <div className="ml-3 mr-3">3</div>
          <i className="fa-solid fa-circle-minus fa-lg" />
        </div>
      </div>

      <div className="ml-3 mt-3">3000</div>
    </div>
  );
};

export default LineItem;
