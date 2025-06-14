import React from 'react';
import { useEffect ,useRef} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container,  List, ListItem, ListItemText, GridLegacy, withTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import bi from '../assets/images/apple.webp';
import green, { pink } from '@mui/material/colors';
import me from '../assets/images/mamta.webp';
import ht from '../assets/images/html.webp';
import cp from '../assets/images/css.webp';
import cs from '../assets/images/cpp.webp';
import pu from '../assets/images/python.webp';
import { Typewriter } from 'react-simple-typewriter';

import '../progressbar.css';
import { Link } from 'react-router-dom';

import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';




const SkillProgress = ({ skill, progress }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.progress-bar');
          progressBar.style.setProperty('--progress', `${progress}%`);
          progressBar.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, [progress]);

  return (
    <div ref={ref} className="skill-container">
      <h4>{skill}</h4>
      <div className="progress-bar" data-progress={progress}></div>
    </div>
  );
};
























export default function About() {
      const [menuOpen, setMenuOpen] = React.useState(false);
    
      const toggleMenu = () => setMenuOpen(!menuOpen);
      
      useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `;
        document.head.appendChild(styleTag);
      }, []);


const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row' ,
    gap:'20px',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20px',
    zIndex:2,
    position:'relative', 

  },
  bounceBox: {

    
  


     backgroundColor: '#f5f5f5',
     padding: '20px',
     borderRadius: '20px',
     boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
     animation: 'bounce 2s infinite',
     minHeight: '120px',
     minWidth: '120px',
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: '8px',






    },
  skill: {
    
  
    fontSize: '1.2rem',
    fontWeight: 'bold',
    
    textAlign: 'center',
    marginTop: '5px',
  
  
  
  },
};




const images = [
  ht,
  pu,
  cs,
  cp,
  
];


  const duplicatedImages = [...images, ...images]; 



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
                <Link to="/"  style={{ marginBottom: '1rem' }}>Home</Link>
                <Link to="/about"  style={{ marginBottom: '1rem' }}>About</Link>
                <Link to="/review" style={{ marginBottom: '1rem' }}>Review</Link>
                <Link to="/Stulist" style={{ marginBottom: '1rem' }}>List of my students</Link>
              </Box>
            </Toolbar>
          </AppBar>
    
          <Box
            sx={{
                  position: 'relative',
                  minHeight:'100vh',
                  overflowX: 'hidden',
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
   <Typography variant='h2' sx={{fontFamily: "'Tangerine', cursive" , mb:3, zIndex:2,position:'relative' }}> This is Mamta</Typography>
</Box>
<Box >

      <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <Typography variant='h3'  sx={{fontFamily: "'Tangerine', cursive" ,mb:3 ,zIndex:2,position:'relative' }} className="text-white text-3xl sm:text-5xl font-bold">
        {' '}
          <span className="text-yellow-400">
            <Typewriter
              words={['a Teacher', 'a Programmer', 'a Full Stack Web Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </Typography>
      </div>
      <Typography  variant ='h3' sx={{  fontFamily: "'Tangerine', cursive",mb:3,zIndex:2,position:'relative'  }} >Welcome to my world!</Typography>
      <Typography variant='h3' sx={{  fontFamily: "'Tangerine', cursive" ,mb:3 ,zIndex:2,position:'relative' }} >About me</Typography>
    
    </Box>
    <Box display="flex"  mb='6'  flexDirection={{ xs: 'column', md: 'row' }}     alignItems="center" gap={6} px={2} position='relative' zIndex={2}       sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
    <Box
      sx={{
        height: '100vh',
      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 0 0 3px black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >


  <img
    src = {me}
    alt= "My Pic"
    style={{    
      
    
      width: '100%',          
      height: '100%',
    
    
      objectFit: 'cover',

      objectPosition: 'center',
      display: 'block',
      
      }}
/>
  </Box>
  </Box>
  <Box>
    <Typography variant="h5" color='white' sx={{zIndex:2,position:'relative' }}>Experienced Computer Science educator with a proven track record of driving exceptional results for high school and engineering students. Passionate about programming and software development, with expertise in multiple languages including C,C++ and Python. Skilled in building standalone software and currently expanding expertise in full stack web development. Dedicated and committed to nurturing young talent while continuing to grow and innovate in the field.</Typography>
    </Box>
  
</Box>
<Box  sx={{mt:2}}>
  <Typography variant='h3' sx={{fontFamily: "'Tangerine', cursive",mb:6,zIndex:2,position:'relative' }}>My skills</Typography>
  


  <Box sx={{
  display:"flex",
  flexDirection: { xs: 'column', md: 'row' }, 
  justifyContent:'center',
  gap:2,
  px:2, }}
>
  <Box sx={{...styles.bounceBox  ,    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'}}> <ComputerIcon fontSize="large"  sx={{ mb: 1, color: '#333' }} /><Typography style={styles.skill} color='#222'> Web Development</Typography></Box>
  <Box sx={{...styles.bounceBox  ,    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'}}> <SchoolIcon fontSize="large" sx={{ mb: 1, color: '#333' }}/><Typography style={styles.skill } color='#222'>Teaching</Typography></Box>
  <Box sx={{...styles.bounceBox  ,    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'}}> <CodeIcon fontSize="large" sx={{ mb: 1, color: '#333' }} /><Typography style={styles.skill }color='#222'>Programming</Typography></Box>


</Box>

</Box>
    


<Box      sx={{
        mt:6,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
        position:'relative',
        zIndex:2,
      }}
    >

<Box
        sx={{
        
          display: 'flex',
          animation: 'scrollX 15s linear infinite',
          '@keyframes scrollX': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >

{duplicatedImages.map((src, index) => (
   <Box key={index} sx={{ mr: 3 }}>
          <img
            
            src={src}
            alt={`slide-${index}`}
            style={{ width: '50px', height: '50px', marginRight: '30px',objectFit:'cover',borderRadius:'50%' }}
          />
          </Box>
        ))
        
        
        }



</Box>



      </Box>


      <Box sx={{ zIndex:2, position:'relative' , width: '100%', maxWidth: '600px', margin: 'auto'}}>

<SkillProgress skill="HTML" progress={90} />
<SkillProgress skill="CSS" progress={80} />
<SkillProgress skill="JavaScript" progress={75} />
<SkillProgress skill="c++" progress={75} />
<SkillProgress skill="Python" progress={75} />
</Box>
</Box>



<Box component="footer" sx={{ py: 2, mt: 4, textAlign: 'center', bgcolor: '#f5f5f5' }}>
         <Typography variant="body2">&copy; built by mamta</Typography>
</Box>



          
          </>
);
     

}