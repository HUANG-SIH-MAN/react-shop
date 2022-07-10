const itemName = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];

const Header = () => {
  return (
    <ul className="nav">
      {itemName.map((i) => {
        return (
          <li className="nav-item m-3" key={i}>
            {i}
          </li>
        );
      })}
    </ul>
  );
};

export default Header;
