import { Stack } from '@mui/material';
import React from 'react';
import AboutHeader from '../../Components/AboutHeader/AboutHeader';
import AboutSecond from '../../Components/AboutHeader/AboutSecond';
import AboutInfo from '../../Components/AboutInfo/AboutInfo';

const About = () => {
    return (
        <Stack spacing={10}>
            <AboutHeader></AboutHeader>
            <AboutSecond></AboutSecond>
            <AboutInfo></AboutInfo>
        </Stack>
    );
};

export default About;