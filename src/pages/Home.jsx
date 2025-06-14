import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import bi from '../assets/images/apple.webp';
import { Link } from 'react-router-dom';

export default function Home() {
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
              display: { xs: menuOpen ? 'block' : 'none', sm: 'flex' },
              flexDirection: { xs: 'column', sm: 'row' }, 
              alignItems:'center',
              gap: 2,
            }}
          >
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/review" >Review</Link>
            <Link to="/Stulist" >List of my students</Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: 'relative',
          overflow:'hidden',
          height:'100%',
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
        
        }}
      > <Box
      sx={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        bgcolor: 'black',
        py: 2,
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'inline-block',
          animation: 'scrollText 15s linear infinite',
          '@keyframes scrollText': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        
        
            <Typography
            variant="h3"
            sx={{
             
              p: 2,
              borderRadius: 2,
              fontFamily: "'Tangerine', cursive",
            }}
          >
            "From Basics to Brilliance — Learn Coding with Confidence!"
          </Typography>
      
</Box>
</Box>
  <Box sx={{bgcolor: 'rgba(0, 0, 0, 0.6)' , minHeight: '100vh', width:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>
   <Box>     
        <Typography  sx={{fontFamily:"'Tangerine',cursive",color:'beige', }}  variant="h4" gutterBottom>
          Courses Offered:
        </Typography>
        <List >
          <ListItem>
            <ListItemText sx={{fontFamily:"fantasy",color:'beige'}}
              primary="11th and 12th"
              secondary={
                <>
                  <List component="div" disablePadding sx={{ pl: 4 }}>
                  
                    <ListItem sx={{color:'beige'}}   > Computer Science State</ListItem>
                    <ListItem sx={{color:'beige'}}>
                      Computer Science CBSE
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        <ListItem sx={{color:'beige'}}>C++</ListItem>
                        <ListItem sx={{color:'beige'}}>Python</ListItem>
                      </List>
                    </ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText sx={{fontFamily:"fantasy",color:'beige'}}
              primary="Engineering"
              secondary={
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  <ListItem sx={{color:'beige'}}>C++</ListItem>
                  <ListItem sx={{color:'beige'}}>Python</ListItem>
                </List>
              }
            />
          </ListItem>
        </List>
        
        

        
          <Typography variant="h6">Mode of Learning: Online and In-person</Typography>
          <Typography variant="h6" gutterBottom>Contact me:</Typography>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/mamta-r-965032165"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            aria-label="LinkedIn" 
          >
            <LinkedInIcon sx={{color:'beige'}} />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:mamtarathore161344@gmail.com"
            color="primary"
            aria-label="Email"
          >
            <EmailIcon sx={{color:'beige'}} />
          </IconButton>
        </Box>       
      </Box>
</Box>
      <Box component="footer" sx={{ py: 2, mt: 4, textAlign: 'center', bgcolor: '#f5f5f5' }}>
        <Typography variant="body2">&copy; built by mamta</Typography>
      </Box>
    </>
  );
}