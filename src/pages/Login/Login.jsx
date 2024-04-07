import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import TextField from "@mui/material/TextField";
import "./Login.scss";
import { Button } from "@mui/material";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  selectLoggedInUser,
  logout,
} from "../../redux-toolkit/slices/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loggedInUser = useSelector(selectLoggedInUser);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();

      const user = data.find((user) => user.username === username);

      if (!user) {
        toast.error("Please Enter Valid Username");
      } else {
        if (user.password === password) {
          toast.success("Success");
          dispatch(login(user.username));
        } else {
          toast.error("Please Enter Valid Credentials");
        }
      }
    } catch (error) {
      toast.error("Failed to fetch users: " + error.message);
    }
  };

  const validate = () => {
    if (!username.trim()) {
      toast.error("Please Enter Username");
      return false;
    }
    if (!password.trim()) {
      toast.error("Please Enter Password");
      return false;
    }
    return true;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ToastContainer />
      <Header backgroundColor="#222222" />
      <div className="loginInputs">
        {loggedInUser ? (
          <div>
            <p>Hoş Geldin, {loggedInUser}!</p>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="formContainer">
            <div>
              <h4>LOGIN</h4>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                label="Username"
                variant="outlined"
              />
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                label="Password"
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Login;
