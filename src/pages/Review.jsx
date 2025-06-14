import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container,  List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import bi from '../assets/images/apple.webp';
import { Link } from 'react-router-dom';
export default function Review() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Anton', sans-serif" }}>
            Learn with mamta
          </Typography>
          {!menuOpen && (<IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMenu} sx={{ display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>)}
          <Box
            component="nav"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }, 
              alignItems:'center',
              display: { xs: menuOpen ? 'block' : 'none', sm: 'flex' },
              gap: 2,
            }}
          >
            <Link to="/" style={{ marginBottom: '1rem' }}>Home</Link>
            <Link to="/about" style={{ marginBottom: '1rem' }} >About</Link>
            <Link to="/review" style={{ marginBottom: '1rem' }}>Review</Link>
            <Link to="/Stulist" style={{ marginBottom: '1rem' }}>List of my students</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
                  sx={{
                    overflow:'hidden',
                        position: 'relative',
                        minHeight:'100vh',
                    backgroundImage: `url(${bi})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 2,
                    py: 4,
                   '&::before': {
                    content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: '100%',
                      background: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent overlay
                      zIndex: 1,
                    },
                    zIndex:0,
                      
                  }}
                >
      <Box>
         <Typography variant='h2' sx={{fontFamily: "'Tangerine', cursive" , mb:3, zIndex:2,position:'relative' }}>Students' Testimonials</Typography>
      </Box>
      

      <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center',zIndex:2,position:'relative' }}>
      
             <iframe  width="315" height="391" src="https://www.youtube.com/embed/jEFYv9-OBbc" title="Student testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
              <iframe  width="315" height="391" src="https://www.youtube.com/embed/BXTI0GsCdRg" title="Student testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="315" height="391" src="https://www.youtube.com/embed/eAyl5VELXHI" title="My foreign student willis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe       width="315" height="391" src="https://www.youtube.com/embed/bHQ4kq1ywpE" title="SK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      </Box>


</Box>


      <Box component="footer" sx={{ py: 2, mt: 4, textAlign: 'center', bgcolor: '#f5f5f5' }}>
              <Typography variant="body2">&copy; built by mamta</Typography>
      </Box>
          </>
        );
      }
