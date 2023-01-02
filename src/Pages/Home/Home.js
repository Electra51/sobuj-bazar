import { Stack } from '@mui/material';
import React from 'react';
import Hero from '../../Components/HeroSection/Hero';
import SecondSection from '../../Components/SecondSection/SecondSection';
import ThirdSection from '../../Components/ThirdSection/ThirdSection';
import VegetableSection from '../../Components/VegetableSection/VegetableSection';



const Home = () => {
    return (
        <Stack spacing={8}>
            <Hero></Hero>
            <SecondSection></SecondSection>
            <VegetableSection></VegetableSection>
            <ThirdSection></ThirdSection>
        </Stack>
    );
};

export default Home;