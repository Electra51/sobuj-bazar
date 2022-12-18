import { Container, Grid} from '@mui/material';
import React from 'react';

import CarouselItem from './CarouselItem';
import HeroCard from './HeroCard';

const Hero = () => {
    return (
        <Container>
            <Grid container spacing={2} style={{
            marginTop: '1%',
            borderRadius:'45'
        }}>
        <Grid item xs={12} md={9}>
          <CarouselItem></CarouselItem>
        </Grid>
        <Grid item xs={12} md={3}>
                  <HeroCard></HeroCard>
                   
          
        </Grid>
      </Grid>
        </Container>
    );
};

export default Hero;