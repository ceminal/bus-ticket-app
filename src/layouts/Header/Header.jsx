import "./Header.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  selectLoggedInUser,
  logout,
} from "../../redux-toolkit/slices/userSlice";
import { useDispatch } from "react-redux";

const Header = ({ backgroundColor }) => {
  const loggedInUser = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header style={{backgroundColor: backgroundColor}}  className="absolute top-0 left-0 right-0 p-4">
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
              {loggedInUser ? (
                <div className="loggedInUser">
                  <Link>{loggedInUser}</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              ) : (
                <Link to="/Login">Giriş Yap</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  loggedInUsername: PropTypes.string,
  backgroundColor: PropTypes.string
};
