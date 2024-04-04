import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import "./WhyUs.scss"

const BusCard = () => {
  return (
    <Card className='WhyUs-Card'>
      <CardContent>
        <Grid container spacing={2} >
          <Grid item xs={3}>
            <img src="pamukkale-logo.png" alt="Pamukkale" />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5" component="div">
              00:30
            </Typography>
            <Typography color="text.secondary">
              (12 Saat 10 Dakika)
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5" component="div">
              2+1
            </Typography>
            <Typography variant="body2">
              Esenler Otogarı - Antalya Otogarı
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4" component="div">
              500 TL
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">
              KOLTUK SEÇ
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BusCard;
