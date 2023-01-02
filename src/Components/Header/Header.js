import {Container } from '@mui/system';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { FlexBox } from '../Styled/FlexBox';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
        <Box>
            <Container>
                <FlexBox justifyContent='space-between' sx={{
                    padding: '1rem 0',
                   
                }}>
                    <Box to='/' component={Link} style={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration:'none'
                    
                    }}>
                    
                    <img src="https://i.ibb.co/GCBw69Z/Mask-group.png" alt="logo"
                        style={{
                            width:'40px'
                            }} /><i style={{
                            fontWeight: 'bold',
                            color:'black'
                            
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
                        <Button variant="contained" size="small" >
                             Sign In</Button>
                    </Stack>
                    </FlexBox>
            </Container> 
            </Box>
        
    );
};

export default Header;