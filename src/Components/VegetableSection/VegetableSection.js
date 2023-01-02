import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import VegetableCard from './VegetableCard';

const VegetableSection = () => {
    const [vegetables, setVegetables] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods/Vegetables')
            .then(res => res.json())
            .then(data => setVegetables(data))
    }, []);
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:'7px' }}>
            <Typography style={{
                fontWeight: '600',
                    fontSize: '1.2rem',
                
                
            }}>
            Vegetables
                </Typography>
                <Typography>See more</Typography>
             </Box>
              <Box sx={{
            display: 'grid',
            // auto-fit the card
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '18px',
            my: 4,
         }}>
            {
                vegetables.slice(0, 5).map(vegetable => <VegetableCard
                    key={vegetable._id}
                    vegetable={vegetable}
                ></VegetableCard>)
            }
       </Box>
      </Container>
    );
};

export default VegetableSection;