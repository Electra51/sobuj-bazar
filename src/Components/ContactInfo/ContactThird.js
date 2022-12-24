import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import img from '../../Assets/images/6029674.jpg'
import { Button, Card, CardContent, CardMedia, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import contact2Img from '../../Assets/images/contact2.jpg'
const ContactThird = () => {
    const form = useRef();
    const handleContactSubmit = event => {
        event.preventDefault();
       emailjs.sendForm('service_d9faccj', 'template_2oa1jeh', form.current, '0HO9JkdAyZAmoCA3y')
              .then((result) => {
                  console.log(result.text);
                  toast.success('send successfully')
              }, (error) => {
                  console.log(error.text);
              });
          
        event.target.reset();
   
    
      }
    return (
<Container>
            <Card sx={{ display: 'flex', width:'100%', flexDirection: { xs: "column", sm: "row" },  backgroundImage: `url(${contact2Img })`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',
            backgroundSize: '100%', justifyContent:'space-evenly'  }}>
            <Stack style={{
                    display: 'flex',
                
                
        }}> 
     
            <Grid >
                      <Card
                          style={{ maxWidth: 450, padding: "10px 5px", margin: "5%", backgroundColor:'#E5E4E2', border:2,borderColor:'#6B8E23' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" align='center'>
                Contact Us
            </Typography> 
             
              <form ref={form} onSubmit={handleContactSubmit}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                                          <TextField type="text" placeholder="Enter name" label="Name"
                                              name='name'
                                               variant="outlined" style={{
                                                  width:'100%'
                                               }} required
                                         />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <TextField type="email" placeholder="Enter email" label="Email" name='email' variant="outlined" style={{
                      width:'100%'
                  }} required/>
                                      </Grid>
                                      <Grid item xs={12}>
                    <TextField type="text" placeholder="Enter Subject" name='subject' label="Subject" variant="outlined" style={{
                      width:'100%'
                    }} required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="text" label="Message" multiline rows={4} placeholder="Type your message here" name='message' variant="outlined" style={{
                                              width: '100%',
                        
                    }} required/>
                  </Grid>
                  <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" style={{
                                              width:'100%'
                                          }} >Submit</Button>  
                                          
                  </Grid>
  
                </Grid>
              </form>
            </CardContent>
                </Card>
                
                  </Grid>
                  
      </Stack>
      <CardMedia>
           <img src={img} alt="" height='101%'/></CardMedia>    
    </Card>
        
    </Container>
        
       
    );
};

export default ContactThird;