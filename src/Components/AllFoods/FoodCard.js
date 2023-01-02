import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function FoodCard({food}) {
    const navigate = useNavigate();

  return (
      <Card sx={{
          maxWidth: 345,
      backgroundColor:'#F8F9F9'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={food.defaultImage}
        alt="Paella dish"
      />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {food?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {food.detail.length > 60
                  ? food?.detail.slice(0, 60) + '...'
                  : food.detail}
              </Typography>
              
          </CardContent>
        
          <CardActions sx={{ justifyContent: 'space-between' }}>
              <Box>
              <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon/>
        </IconButton>
        <IconButton aria-label="cart">
          <ShoppingCartOutlinedIcon/>
        </IconButton>
          </Box>
           
              <Box>
                  <Button onClick={() => navigate(`/food-details/${food._id}`)}  variant='contained'>View Details</Button>
       </Box>
             
            
     
            
      </CardActions>
   
    </Card>
  );
}