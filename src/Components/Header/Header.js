import {Container } from '@mui/system';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { FlexBox } from '../Styled/FlexBox';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
            <Container>
                <FlexBox justifyContent='space-between' sx={{
                    padding: '1rem 0',
                   
                }}>
                    <Box style={{
                        display: 'flex',
                        alignItems:'center'
                    }}>
                    <Link to='/'>
                    <img src="https://i.ibb.co/GCBw69Z/Mask-group.png" alt="logo"
                        style={{
                            width:'40px'
                            }} /></Link> <i style={{
                            fontWeight: 'bold'
                            
                        }}>SOBJI BAZAR</i>
                    
                    </Box>
                
                    <Stack direction='row' spacing={1} sx={{
                        alignItems:'center'
                    }}>
                    <IconButton>
                        <FavoriteBorderRoundedIcon/>
                        </IconButton>
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                        </IconButton>
                    <Button variant="contained" 
                            size="small"
                    >
                            Become Seller</Button>
                        <Button variant="contained" size="small" startIcon={<PersonOutlineRoundedIcon/>}>
                             Sign In</Button>
                    </Stack>
                    </FlexBox>
            </Container> 
        
    );
};

export default Header;