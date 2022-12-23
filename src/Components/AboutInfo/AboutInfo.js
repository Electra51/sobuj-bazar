import { Container, Grid } from '@mui/material';
import React from 'react';
import AboutWriteInfo from './AboutWriteInfo';
import QuiltedImageList from './QuiltedImageList';

const AboutInfo = () => {
    return (
        <Container>
        <Grid container spacing={6} style={{
        marginTop: '1%',
        borderRadius:'45'
    }}>
    <Grid item xs={12} md={7}>
     <AboutWriteInfo></AboutWriteInfo>
    </Grid>
    <Grid item xs={12} md={5}>
       <QuiltedImageList></QuiltedImageList>     
               
      
    </Grid>
  </Grid>
    </Container>
    );
};

export default AboutInfo;