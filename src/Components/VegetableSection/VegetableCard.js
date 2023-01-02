import { Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const VegetableCard = ({ vegetable }) => {
    console.log(vegetable);
    const navigate = useNavigate();
    return (
        <Box onClick={() => navigate(`/food-details/${vegetable._id}`)}>
           
            <Card sx={{minWidth: { xs: "240", sm: "240",lg:'340',md:'' }
                ,
                '&:hover': {
                    cursor: 'pointer',
                    boxShadow:
                       'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 30, 0.3) 0px 0px 8px'},}}>
      <CardMedia
        sx={{ height: {xs:'200px',sm:'190px',lg:'140px',md:'140px'} }}
        image={vegetable.defaultImage}
        title={vegetable.title}
      /><Typography variant="h5" textAlign='center' fontSize='18px' fontWeight='600'>
      {vegetable.title}
                  </Typography>
      <Box >
                    <Box sx={{
                        flexDirection: 'row',
                    my:'7px'}}>
                    <Typography textAlign='center'  variant="body2">{vegetable.weight}</Typography>
                    <Typography textAlign='center' variant="body2">Price: {vegetable.price}</Typography></Box>
               
                    </Box>
                  
                 
          
                    
        
     
     
      
      
    </Card>
        </Box>
    );
};

export default VegetableCard;