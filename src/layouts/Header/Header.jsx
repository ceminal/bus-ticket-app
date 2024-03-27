import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-4">
      <div className="navMenu">
        <div>
          <Link to="/" className="logo">
            BiletNoktası
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/FAQ">Yardım</Link>
            </li>
            <li>
              <Link to="/Register">Üye Ol</Link>
            </li>
            <li>
              <Link to="/Login">Giriş Yap</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
