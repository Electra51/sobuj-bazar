import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contactImg from '../../Assets/images/contact.jpg'
const ContactFirst = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${contactImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 500,
            width: '100%',
            
            
        }}>
          
            <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%" },
            padding: { xs: 2, sm: 2, md: 19 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant={"h6"} color="tomato" align="center" pt={8}>
              Get in Touch!
            </Typography>
                    <Typography variant="h4" align="center">
            Contact Us
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              Send directly by message in bellow form
            </Typography>
          </Box>
        </Box>
         
    
         
        </Box>
    );
};

export default ContactFirst;