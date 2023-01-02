import { Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const FoodCategoryList = ({ foodCat }) => {
    console.log(foodCat);
    const { category } = foodCat;
    return (
        <Box>
            <Button to={`/allFoods/${category}`} component={Link} variant="contained" style={{
                width: '100%',
                marginTop:'2%'
              }}>{category} 
              </Button>
            
       </Box>
    );
};

export default FoodCategoryList;