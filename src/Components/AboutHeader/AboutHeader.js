import { Box, Typography } from '@mui/material';
import React from 'react';
import shopImage from '../../Assets/images/shop1.jpg'
const AboutHeader = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${shopImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 600,
            width: '100%',
            
            
        }}>
            <Box sx={{
                backgroundColor: 'wheat',
                opacity:'0.8',
            }}>
                <Typography variant='h4' align='center'>
                    About Us
                </Typography>
                <Typography variant='h6' align='center'>
                    Welcome to Sobji Bazar!
                </Typography>
                
            </Box>
            <Box
          sx={{
            width: { xs: "50%", sm: "50%", md: "40%" },
            padding: { xs: 2, sm: 2, md: 19 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
              Exciting Offers
            </Typography>
                    <Typography variant="h4" align="center">
             So much Fresh Fruits and Vegetable Here!
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              Catch it early, so exciting offers with sobji Bazar
            </Typography>
          </Box>
        </Box>
          
        </Box>
    );
};

export default AboutHeader;