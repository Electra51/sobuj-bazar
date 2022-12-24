import { Container, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

const ContactSecond = () => {
    return (
        <Container>
          
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                mt={5}
            >
                <Grid container spacing={3} sx={{
alignItems:'center'
                }}>
                    <Grid item xs={12} md={4}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                flexDirection:'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <MailOutlineIcon color='primary' fontSize='large'></MailOutlineIcon>
                                <Typography variant="h6">Mail Us</Typography>
                                <Typography variant="body" color='#6B8E23'>sobji@bazar.com</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                flexDirection:'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <PhoneInTalkIcon color='primary' fontSize='large'></PhoneInTalkIcon>
                                <Typography variant="h6">Call Us</Typography>
                                <Typography variant="body" color='#6B8E23'>Call us within 10am to 10pm | +88056544544</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                flexDirection:'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <LocationOnIcon color='primary' fontSize='large'></LocationOnIcon>
                                <Typography variant="h6">Our Location</Typography>
                                <Typography variant="body" color='#6B8E23'>Cecilia Chapman Nulla LA, United States 96522</Typography>
                            </Box>
                        </Box>
                    </Grid>
                   
                </Grid>
            </Stack>
        </Container>
    );
};

export default ContactSecond;