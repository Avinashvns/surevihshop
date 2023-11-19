import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton,  Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cardpic from "../assets/images/login.jpg";

export default function ProductCard(){

    const bull = (
        <Box component='span' sx={{ display: 'inline-block', mx: '14px', transform: 'scale(0.8)' }}>
          *
        </Box>
      );

    return(
        <Card sx={{ maxWidth: 300, mt: 2, textAlign: 'center', mx: 2 }} style={{ border: '1px solid red' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" >R</Avatar>
          }
          action={
            <IconButton aria-label='setting'> <MoreVertIcon /> </IconButton>
          }
          title="Surevih Product"
          subheader="19 Nov 2023"
        />
        <CardActionArea>
          <Box sx={{ padding: 1 }}>
            <CardMedia sx={{ maxHeight: 150 }}
              component="img"
              image={Cardpic}
              alt='Card image'
            />
          </Box>

          <CardContent sx={{ p: 0, textAlign: 'center' }} >
            <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} color='text.secondary' >
              Almonds, 100g
            </Typography>
            <Typography variant='h5' component="div" >
              $149.00{bull}
            </Typography>
          </CardContent>

          {/* Card Action for Button */}
          <CardActions style={{ justifyContent: 'center' }} >
            <Button variant='contained' style={{ paddingLeft: "40px", paddingRight: '40px' }} > Add to Cart</Button>
          </CardActions>
          
        </CardActionArea>
      </Card>
    );
}