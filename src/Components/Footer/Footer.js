
import {Grid,List,ListItemText,Typography,Button,Stack, TextField,} from "@mui/material";
import { Box } from "@mui/system";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
    return (
        <Box
        sx={{
          backgroundColor:'#6B8E23',
          p: { xs: 4, md: 10 },
          fontSize: { xs: '12px', md: '14px' }
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} lg={4}>
            <Typography variant="body1">About Sobji Bazar</Typography>
            <Typography variant="caption2">
              This is a grocery store using react js ,material ui,mongodb. Fresh
              and good fruits and vegetable are available here. Please follow us
              on this.
            </Typography>
            <Box
              sx={{
                mt: 4
               
              }}
            >
              <FacebookIcon sx={{ mr: 1 }} />
              <TwitterIcon sx={{ mr: 1 }} />
              <InstagramIcon />
            </Box>
                </Grid>
                <Grid item md={6} lg={2}>
            <Typography variant="body1">Public Api</Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                 Documentation
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                 About
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  FAQ & Blogs
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Wishlist
                </Typography>
              </ListItemText>
            </List>
          </Grid>
          <Grid item md={6} lg={2}>
            <Typography variant="body1">Services</Typography>
            <List>
              
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Order Tracking
                </Typography>
                        </ListItemText>
                        <ListItemText>
                <Typography lineHeight={2} variant="body2">
                Grocery items
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Privacy Policy
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="body2">
                  Terms & Conditions
                </Typography>
              </ListItemText>
            </List>
          </Grid>
         
          <Grid item md={6} lg={4}>
            <Typography variant="body1">Newsletter</Typography>
            <Stack>
            <TextField type="email" placeholder="Enter email" label="Email" name='email' variant="outlined" style={{
                      width:'100%'
                  }} required/>
              <Button
                startIcon={<SendIcon />}
                sx={{ mt: 4, mb: 4 }}
                variant="contained"
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Footer;