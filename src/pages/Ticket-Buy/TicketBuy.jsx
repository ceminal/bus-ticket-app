import React from 'react';
import { Container, TextField, Button, Box, Typography, Grid, InputAdornment } from '@mui/material';

import "./TicketBuy.scss";


function BookingForm() {
  return (
    <Container className='TicketBuy-main' maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Ticket Booking
      </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <TextField label="Departure" fullWidth defaultValue="Esenler Otogari" />
          <TextField label="Arrival" fullWidth defaultValue="Antalya Otogari" margin="normal" />
          <TextField label="Departure Time" fullWidth defaultValue="14 Mart Persembe" margin="normal" />
          <TextField label="Seat Number" fullWidth defaultValue="1" margin="normal" />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField label="Email Address" fullWidth defaultValue="furkanyucel@gmail.com" />
          <TextField 
            label="Phone Number" 
            fullWidth 
            defaultValue="+90 (506) 123 - 45 - 67" 
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start">+90</InputAdornment>,
            }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField label="Card Number" fullWidth placeholder="1234 1234 1234 1234" />
          <TextField label="Expiration Date" fullWidth placeholder="03 / 24" margin="normal" />
          <TextField label="CVV" fullWidth placeholder="***" margin="normal" />
          <Box mt={2}>
            <Button variant="contained" color="primary" fullWidth>
              Pay 450 €
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BookingForm;
