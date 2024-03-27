import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import TextField from "@mui/material/TextField";
import "./Login.scss";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <>
      <Header />
      <div className="loginInputs">
        <div>
          <h4>LOGIN</h4>
          <TextField
            id="email"
            label="E-Mail"
            variant="outlined"
          />
          <TextField
            id="password"
            label="Şifre"
            variant="outlined"
          />
          <Button variant="contained" style={{ width: "100%" }}>
            Login
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
