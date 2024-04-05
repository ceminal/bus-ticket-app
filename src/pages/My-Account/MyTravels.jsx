import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const TravelCard = ({ destination, date }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            PAMUKKALE
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${destination} - ${date}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TravelCard;