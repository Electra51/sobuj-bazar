import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button, Drawer } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FoodCategoryList from './FoodCategoryList';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Button to='/' component={Link} variant="contained" style={{
                width: '100%',
          marginTop: '2%',
                textDecoration:'none'
        }}> Home
           
              </Button>
      </MenuItem>
      <MenuItem>
       
      <Button to='/about' component={Link} variant="contained" style={{
                width: '100%',
                marginTop:'2%',
                
        }}>
         About Us
         
              </Button>
      </MenuItem>
      <MenuItem>
       
       <Button to='/contact' component={Link}  variant="contained" style={{
                 width: '100%',
                 marginTop:'2%'
        }}>
          Contact
          
               </Button>
       </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  
  const [foodCategory, setFoodCategory] = useState([]);
  useEffect(() => {
      fetch('http://localhost:5000/foodCategory')
          .then(res => res.json())
          .then(data => setFoodCategory(data))
  }, []);


  return (
     
    <Box sx={{
      flexGrow: 1,
      position: 'sticky',
      top:'0'}}>
      <AppBar position="static">
        <Toolbar>
                  <IconButton
                      onClick={() => setIsDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
                      <MenuIcon />
                      <Typography variant="h6" component="h6">
  All
                      </Typography>
 {/* drawer icon */}
                  </IconButton>
{/* drawer */}
                  <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
            <Box p={2} width='250px' role='presentation' textAlign='center'>
            <Box to='/' component={Link} style={{
                        display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color:'black'
                    }}>
                    <img src="https://i.ibb.co/GCBw69Z/Mask-group.png" alt="logo"
                        style={{
                            width:'50px'
                            }} /> <i style={{
                  fontWeight: 'bold',
                              
                        }}>SOBJI BAZAR</i>
              </Box>
             <hr />
              <Typography variant='h6' component='div' style={{
            background:'#6B8E23'
          }}>
          All Category
              </Typography>
              <hr />
              {
                foodCategory.map(foodCat =>
                  <FoodCategoryList
                    key={foodCat._id}
                    foodCat={foodCat}
                  ></FoodCategoryList>)
              }
             
             
            </Box>
          
      </Drawer>
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <Button to='/' component={Link}
            variant="h6"
          
           
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            Home
              
            
          </Button>
            
           
              
           
            <Button
            variant="h6"
            to='/about' component={Link}
            
            sx={{ display: { xs: 'none', sm: 'block' } }}
            > 
            About Us 
              </Button>
           
          <Button
            variant="h6"
            to='/contact' component={Link}
            
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
               Contact
              
           
          </Button>
           
            <Button
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  
  );
}