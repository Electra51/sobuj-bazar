import { Box } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';

const AllFoods = () => {
    const categoryData = useLoaderData();
    console.log(categoryData);
    return (
        
            <Box
               sx={{
                  display: 'grid',
                  // auto-fit the card
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  justifyItems: 'center',
                  gap: '20px',
                  mt: 8,
               }}
        >
            {
                categoryData.map(catData => <FoodCard
                    key={catData._id}
                food={catData}>

                </FoodCard>)
            }
            </Box>
       
    );
};

export default AllFoods;