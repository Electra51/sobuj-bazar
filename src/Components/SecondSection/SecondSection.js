import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { FlexBox } from '../Styled/FlexBox';



export default function SecondSection() {
   
    return (
        <Container >
            
                <Card sx={{ maxWidth: '100%', background:'#6B8E23',padding:'0 3%' }}>
                <FlexBox justifyContent='space-between'>
                <CardContent>
                  <Typography sx={{ fontSize: 24, }} gutterBottom>
                    100% Natural Product Here
                  </Typography>
                  <Typography variant="body2">
                  See Our latest discounted products from here and get a special discount product
                    
                  </Typography>
                </CardContent>
                <CardActions>
                          <Button variant="contained" size="small">See More</Button>
                    </CardActions>
                    </FlexBox>
            </Card>
            
         
       </Container>
      );
    }