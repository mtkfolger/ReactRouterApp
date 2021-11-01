import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CoffeeImage from "../../coffee.png";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={CoffeeImage}
        alt="coffee-pour"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This delicious blend of medium roast coffee comes from the beautiful south american country of Belize.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}