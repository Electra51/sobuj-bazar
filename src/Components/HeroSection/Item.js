import { Box, Button, Typography } from '@mui/material'

function Item({item})
{
    return (
       <Box sx={{
        height: '100%',
        width: '100%',
        display: 'grid',
            placeItems: 'center',
            position: 'relative',
            borderRadius: '5%',
        
       
    }}>
            <img src={item.img} alt="" style={{
                width: '100%',
            height:'70vh'}} />
            
           
                  <Box sx={{
                        mx: 'auto',
                width: '50%',
                position: 'absolute',
                top: '40%',
                       left:'10%'
                       
 }}>
                <Typography variant='h5' fontWeight={600}>
                {item.Title}
                </Typography>
                <Typography>
                    {item.describe}
                </Typography>
                
                <Button variant="contained">
                    Let's Start
                </Button>
            </Box>
                
                  
                
               
            

            </Box>
        
    )
}
export default Item;