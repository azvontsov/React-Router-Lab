import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-item">
          <h1>iStocks</h1>
        </div>
      </Link>
      <Link to="/stocks">
        <div className="nav-item">
          <h2>Stocks</h2>
        </div>
      </Link>
      <Link to="/about">
        <div className="nav-item">
          <h2>About</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
