import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, List, ListItem, ListItemText, tableSortLabelClasses } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

import EmailIcon from '@mui/icons-material/Email';
import bi from '../assets/images/apple.webp';
import am from '../assets/images/Amruta.webp';
import su from '../assets/images/narayana.webp';
import ay from '../assets/images/Ayushi.webp';
import ad from '../assets/images/adhish.webp';
import tos from '../assets/images/toshik.webp';
import amy from '../assets/images/ameya.webp';
import ni from '../assets/images/nidhi.webp';
import sr from '../assets/images/srishti.webp';
import ha from '../assets/images/harshada.webp';
import mh from '../assets/images/mohini.webp';
import sp from '../assets/images/shiv.webp';
import st from '../assets/images/saumya.webp';
import jg from '../assets/images/jayesh.webp';
import sk from '../assets/images/shwetak.webp';
export default function StudentList() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  
    const students = [
      {
        Name: 'Amruta M',
        Subject: 'C',
        Class: 'Second Year',
        College: 'YCCE,Nagpur',
        image: am,
      },
      {
        Name: 'Susnata M',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Narayana Vidyalaya,Nagpur',
        image: su,
      },
      {
        Name: 'Ayushi A',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Santaji Dhanaji Mahavidyalaya,Nagpur',
        image: ay,
      },
      {
        Name: 'Adhish P',
        Subject: 'C, C++ ,Java',
        Class: 'Second year Polytechnic',
        College: 'Govt.Polytechnic,Nagpur',
        image: ad,
      },
      {
        Name: 'Toshik G',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Royal Gondwana,Nagpur',
        image: tos,
      },
      {
        Name: 'Ameya K',
        Subject: 'C,C++,DS',
        Class: 'Second year ,B.E',
        College: 'Bhausaheb college of Engineering,Nagpur',
        image: amy,
      },
      {
        Name: 'Nidhi J',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Montfort,Nagpur',
        image: ni,
      },
      {
        Name: 'Srishti V',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Major Hemat Jakate,Nagpur',
        image: sr,
      },
      {
        Name: 'Harshada A',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'School of Scholars,Nagpur',
        image: ha,
      },
      {
        Name: 'Mohini H',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Somalwar Nikalas,Nagpur',
        image: mh,
      },
      
      {
        Name: 'Shivani P',
        Subject: 'C,C++',
        Class: 'Second year',
        College: 'NYSS College,Nagpur',
        image: sp,
      },
      
      {
        Name: 'Saumya T',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Bhartiya Vidya Bhavan,Nagpur',
        image: st,
      },
      {
        Name: 'Jayesh G',
        Subject: 'Computer Science State',
        Class: '12th',
        School: 'Sindhi Hindi High School,Nagpur',
        image: jg,
      },
      {
        Name: 'Shweta K',
        Subject: 'Computer Science C++ CBSE',
        Class: '12th',
        School: 'Kendriya Vidyalaya,Nagpur',
        image: sk,
      },
    ];





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
         <Typography variant='h2' sx={{fontFamily: "'Tangerine', cursive" , mb:3, zIndex:2,position:'relative' }}>List of my Students</Typography>
      </Box>
      

      <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center',zIndex:2,position:'relative' }}>
      <div id="stucont">
      {students.map((student, index) => (
        <div key={index} style={{ marginBottom: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={student.image} alt={student.Name} style={{ maxWidth: '150px', borderRadius: '8px' }} />
          <div>
            <h2>Name: {student.Name}</h2>
            <h3>Subject: {student.Subject}</h3>
            <h3>Class: {student.Class}</h3>
            {student.College ? (
              <h3>College: {student.College}</h3>
            ) : (
              <h3>School: {student.School}</h3>
            )}
          </div>
        </div>
      ))}
    </div>
      </Box>


</Box>


      <Box component="footer" sx={{ py: 2, mt: 4, textAlign: 'center', bgcolor: '#f5f5f5' }}>
              <Typography variant="body2">&copy; built by mamta</Typography>
      </Box>
          </>
        );
      }
