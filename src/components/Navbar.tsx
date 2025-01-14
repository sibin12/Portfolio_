import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";  // If you're using React Router
import MenuIcon from '@mui/icons-material/Menu';  // To display a hamburger menu for mobile view

const Navbar: React.FC = () => {
  // For mobile menu toggle
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar 
        sx={{
          borderRadius: "8px", // Rounded corners for the toolbar
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Stronger shadow for a 3D effect
          padding: "0 20px", // Add padding for spacing inside the toolbar
          display: "flex", 
          justifyContent: "space-between", // Ensures spacing between elements
        }}
      >
        {/* Logo Text with 3D effect */}
        <Typography 
          variant="h6" 
          sx={{
            flexGrow: 1, 
            fontWeight: 'bold', 
            color: "white",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px #1976d2, 0 0 5px darkblue", // 3D effect on text
            transform: "rotate(0deg)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "rotate(-5deg)", // Hover effect: Rotate slightly for extra 3D interaction
            },
          }}
        >
          Sibin Silu
        </Typography>

        {/* Desktop View: Navbar Links */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{
              marginLeft: 2, 
              '&:hover': { 
                backgroundColor: '#1565c0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button 3D shadow
              },
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{
              marginLeft: 2, 
              '&:hover': { 
                backgroundColor: '#1565c0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button 3D shadow
              },
            }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/services" 
            sx={{
              marginLeft: 2, 
              '&:hover': { 
                backgroundColor: '#1565c0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button 3D shadow
              },
            }}
          >
            Services
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/my-work" 
            sx={{
              marginLeft: 2, 
              '&:hover': { 
                backgroundColor: '#1565c0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button 3D shadow
              },
            }}
          >
            My Work
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact" 
            sx={{
              marginLeft: 2, 
              '&:hover': { 
                backgroundColor: '#1565c0',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Button 3D shadow
              },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile View: Hamburger Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            sx={{ mt: 2 }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/about">About</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/services">Services</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/my-work">My Work</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
