import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

import HeaderTwo from '../Components/Header/HeaderTwo';

const Main = () => {
    return (
        <div>
            <Header></Header>
           
            <HeaderTwo></HeaderTwo>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;