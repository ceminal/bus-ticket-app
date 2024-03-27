import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <Header />
      <div className="registerInputs">
        <div>
          <h4>REGISTER</h4>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
          />
           <TextField
            id="surname"
            label="Surname"
            variant="outlined"
          />
          <TextField
            id="email"
            label="E-Mail"
            variant="outlined"
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
          />
          <TextField
            id="confirmpassword"
            label="Confirm Password"
            variant="outlined"
          />
          <Button variant="contained" style={{ width: "100%" }}>
            Register
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
