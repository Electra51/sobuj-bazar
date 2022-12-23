
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import logo1 from '../../Assets/images/logo3.png';
import logo2 from '../../Assets/images/clock.png';
import logo3 from '../../Assets/images/secuirity.png';
import logo4 from '../../Assets/images/logo4.png';

const AboutSecond = () => {

    return (
        <Container>
            <Typography variant="h5" align="center">Facilities We Provided</Typography>
            <Typography align="center">Some Extra Facilities here that help you to choose Sobji Bazar</Typography>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                mt={5}
            >
                <Grid container spacing={3} sx={{

                }}>
                    <Grid item xs={12} md={3}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <img src={logo1} alt="" height={80} width={100} />
                                <Typography variant="body">Fast Delivery</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <img src={logo2} alt="" height={80} width={100} />
                                <Typography variant="body">24/7 Services</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <img src={logo3} alt="" height={80} width={90} />
                                <Typography variant="body">Secure Payment</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box >
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 1,
                                borderRadius: 1,
                                padding: '5% 0'
                            }}>
                                <img src={logo4} alt="" height={80} width={90} />
                                <Typography variant="body">Online Delivery</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
};


export default AboutSecond;