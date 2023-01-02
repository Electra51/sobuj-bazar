import { Box, Button, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FlexBox } from '../../Components/Styled/FlexBox';
import { CounterBox } from './FoodDetails.style';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const FoodDetails = () => {
    const foodDetailsData = useLoaderData();
    console.log(foodDetailsData);

    const [quantity, setQuantity] = useState(0);
    return (
        <Box>
            <Container>
                <FlexBox sx={{my:5,gap:10}}>

                    <Box sx={{ flex: 1 }}>
                       
                       
                        <img src={foodDetailsData.defaultImage} alt='' style={{
                            maxWidth: '100%',
                            width: '400px',
                            margin: '0 auto',
                            display:'block'
                        }}/>
                    
                        

                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Stack spacing={6}>
                            <Typography variant='h4' fontWeight={600}>
                                {foodDetailsData.title}</Typography>  
                            <Typography variant='body' sx={{
                                    width:450
                                }}>
                                {foodDetailsData.detail}</Typography> 
                            <FlexBox>
                                <Typography variant='h4' fontWeight={400}>
                                    ${foodDetailsData.price}
                                </Typography>
                                <CounterBox>
                                    <AddIcon onClick={()=>setQuantity(quantity+1) } />
                                    <Typography
                                        variant='h5'
                                        sx={{width:'20px'}}
                                    fontWeight={600}>
{quantity}
                                    </Typography>
                                    <RemoveIcon
                                        onClick={() => setQuantity(quantity - 1)} />
                                    
                                </CounterBox>
                                
                            </FlexBox>
                            <Button sx={{
                                width:['100%','100%','40%']
                            }} variant='contained' startIcon={<ShoppingCartOutlinedIcon/>}>
                                        Add To Cart</Button>
                        </Stack>
                        
                    </Box>
                  
                </FlexBox>
            </Container>
        </Box>
    );
};

export default FoodDetails;