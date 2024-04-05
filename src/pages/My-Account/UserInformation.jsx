import React from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function AccountManagement() {
  return (
    <Container maxWidth="md">
      <h1>Hesabım</h1>
      <form>
        <TextField
          label="Adınız"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Soyadınız"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="T.C. Kimlik Numarası"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox name="notCitizen" />}
          label="T.C. vatandaşı değilim"
        />
        <TextField
          label="Doğum Tarihiniz"
          type="date"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <RadioGroup row>
          <FormControlLabel value="male" control={<Radio />} label="Erkek" />
          <FormControlLabel value="female" control={<Radio />} label="Kadın" />
        </RadioGroup>
        <TextField
          label="Cep Telefonu Numaranız"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="E-Mail Adresiniz"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Şifreniz"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary">
          Güncelle
        </Button>
      </form>
    </Container>
  );
}

export default AccountManagement;
