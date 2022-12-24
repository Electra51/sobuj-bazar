import { Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import React from 'react';
import AboutWriteInfo from './AboutWriteInfo';
import QuiltedImageList from './QuiltedImageList';

const AboutInfo = () => {
    return (
        <Container>
            <Card sx={{ display: 'flex', width:'100%', flexDirection: { xs: "column", sm: "row" } }}>
      <Box sx={{ display: 'flex', flexDirection:  "column"  }}> 
        <CardContent sx={{ flex: '1 0 auto'}}>
        <AboutWriteInfo></AboutWriteInfo>
        </CardContent>
      </Box>
      <CardMedia
                    sx={{
                        width: '50%',
                        
                    }}
        
                >
           <QuiltedImageList></QuiltedImageList></CardMedia>    
    </Card>
        
    </Container>
    );
};

export default AboutInfo;