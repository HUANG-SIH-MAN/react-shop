import cx from 'classnames';
import React from 'react';
import style from './step1.module.scss';

const cityName = [
  '台北市',
  '新北市',
  '桃園市',
  '基隆市',
  '新竹市',
  '苗栗縣',
  '台中市',
  '彰化縣',
  '雲林縣',
  '嘉義市',
  '嘉義縣',
  '台南市',
  '高雄市',
  '屏東縣',
  '南投縣',
  '宜蘭縣',
  '台東縣',
  '花蓮縣',
  '澎湖縣',
  '金門線',
  '馬祖縣',
];

const Step1 = React.memo(() => {
  return (
    <>
      <h5 className="m-3">寄送地址</h5>
      <form>
        <div className="form-group row m-2 mb-4">
          <div className="sex col-4">
            <div className={cx('mb-1', style.label)}>稱謂</div>
            <select className="form-select">
              <option value="0">女士</option>
              <option value="1">先生</option>
            </select>
          </div>
          <div className="name col-7">
            <div className={cx('mb-1', style.label)}>姓名</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入姓名"
            />
          </div>
        </div>
        <div className="form-group row m-2 mb-4">
          <div className="phone col-6">
            <div className={cx('mb-1', style.label)}>電話</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入行動電話"
            />
          </div>
          <div className="email col-5">
            <div className={cx('mb-1', style.label)}>Email</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入電子郵件"
            />
          </div>
        </div>
        <div className="form-group row m-2 mb-4">
          <div className="city col-4">
            <div className={cx('mb-1', style.label)}>縣市</div>
            <select className="form-select">
              {cityName.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="address col-7">
            <div className={cx('mb-1', style.label)}>地址</div>
            <input
              className="form-control"
              type="text"
              placeholder="請輸入地址"
            />
          </div>
        </div>
      </form>
    </>
  );
});

export default Step1;
