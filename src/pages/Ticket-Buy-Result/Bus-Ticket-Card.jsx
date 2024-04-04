import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const BusTicketCard = () => {
  return (
    <Card sx={{ minWidth: 375, boxShadow: 3, display: 'flex', flexDirection: 'row' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/pamukkale-logo.png" alt="Pamukkale Logo" style={{ width: '100px', marginRight: '64px' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 4 }}>
          <Box>
            <Typography variant="body1">
              Hareket Tarihi: 4 Nisan Perşembe
            </Typography>
            <Typography variant="body1">
              Hareket Saati: 00:30
            </Typography>
            <Typography variant="body1">
              Hareket Yeri: Esenler Otogarı
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BusTicketCard;
