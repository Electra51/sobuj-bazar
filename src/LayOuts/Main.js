import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

import HeaderTwo from '../Components/Header/HeaderTwo';

const Main = () => {
    return (
        <Stack>
            <Header></Header>
           
            <HeaderTwo></HeaderTwo>
            
            <Stack spacing={10}>
            <Outlet></Outlet>
            <Footer></Footer>
            </Stack>
            
        </Stack>
    );
};

export default Main;