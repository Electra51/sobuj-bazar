
import { Stack } from '@mui/material';
import React from 'react';


import ContactFirst from '../../Components/ContactInfo/ContactFirst';
import ContactSecond from '../../Components/ContactInfo/ContactSecond';
import ContactThird from '../../Components/ContactInfo/ContactThird';
const Contact = () => {
    
    return (
        <Stack spacing={10}>
            <ContactFirst></ContactFirst>
            <ContactSecond></ContactSecond>
        <ContactThird></ContactThird>
        </Stack>
    );
};

export default Contact;