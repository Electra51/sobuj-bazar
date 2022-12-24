import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import ThumbUpOffAltSharpIcon from '@mui/icons-material/ThumbUpOffAltSharp';
const AboutWriteInfo = () => {
    return (
        <Box sx={{
            padding: '0 2%',
            
        }}>
           
            <Typography variant='h4'
                sx={{
                    marginTop: '5%',
                    color:'#6B8E23'
            }}>About Sobji Bazar</Typography>
            <br />
            <Typography variant='body'>We believe the ecosystem we power can transform the lives of a billion Indians significantly over the coming decade. They will have access to everyday essentials like groceries at the best value, be able to discover products that improve their health and wellbeing, and spend more meaningful time with their families with the assurance that their essential needs are being looked after by us. On the other side of this virtuous cycle are the millions of local businesses catering to a nation's needs, helping create more opportunities for employment, growth, and above all, a better life.Built on a proprietary technology stack, the Grocers platform serves as a convergence of consumers looking for everyday essentials, partner stores who serve their needs efficiently, and manufacturers looking for a channel to reach a nation of consumers. While our technology caters to the burgeoning population of urban India, it is ready and poised to serve the next 100+ million Indians who are yet to start shopping online.</Typography>

            <Box>
            <br />
                <Typography>Share and follow us on</Typography>

                <IconButton>
                    <FacebookRoundedIcon/>
                </IconButton>
                <IconButton>
                    <ShareRoundedIcon/>
                </IconButton>
                <IconButton>
                    <ThumbUpOffAltSharpIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default AboutWriteInfo;