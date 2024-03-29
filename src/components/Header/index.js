import React from 'react';

const itemName = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];

const Header = React.memo(() => {
  return (
    <ul className="nav">
      {itemName.map((item) => {
        return (
          <li className="nav-item m-3" key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
});

export default Header;
