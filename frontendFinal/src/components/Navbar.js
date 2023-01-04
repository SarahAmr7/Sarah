import { click } from '@testing-library/user-event/dist/click';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from './CustomButton';
import './Navbar.css';
import axios from 'axios';
 import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';
import { Icon } from '@mui/material';
import StreamIcon from '@mui/icons-material/Stream';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeProvider } from 'react-bootstrap';

function Navbar() {
  const[click, setClick] = useState(false);
  const[button, setButton] = useState(true);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [countries,setCountries]= useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/Countries`).then(res => {
        
        const countries = res.data
        setCountries(countries)
    })
    .catch(err => {
        console.log(err)
    })
},[]);

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#000000',
    },
    color: {
      // This is green.A700 as hex.
      main: '#000000',
    },
  },
});
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);


  



  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <StreamIcon style={{fontSize: "3rem"}}/>
                      LRNIFY
                </Link>
                <FormControl sx={{ m: 5, width: '210ch'  }}  variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            style= { {borderRadius: 60} }
            // value={values.weight}
            // onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            // inputProps={{
            //   'aria-label': 'weight',
            // }}
          />
          {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
        </FormControl>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {/* <li className='nav-item'>
                  <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li> */}
                <li className='nav-item'>
                  <Link to = '/Coruse' className='nav-links' onClick={closeMobileMenu}>
                    Courses
                  </Link>
                </li>
                {/* <li className='nav-item'>
                  <Link to = '/AdminHome' className='nav-links' onClick={closeMobileMenu}>
                    Admin Portal
                  </Link>
                </li> */}
                {/* <li className='nav-item'>
                  <Link to = '/Courses' className='nav-links' onClick={closeMobileMenu}>
                    Start teaching on LRNFY
                  </Link>
                </li> */}

                  <li className='nav-item'>
                  <Link to = '/Courses' className='nav-links' onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to = '/Courses' className='nav-links' onClick={closeMobileMenu}>
                    Sign up
                  </Link>
                </li>
                </ul>
                {/* <ThemeProvider theme={theme}>

                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Login 
                </Link>

                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Sign up 
                </Link>



                {/* {CustomButton && <CustomButton buttonStyle='btn--outline'>Login</CustomButton>} */}
                {/* <h1>   _  </h1> */}
                {/* {CustomButton && <CustomButton buttonStyle='btn--outline'>Sign up</CustomButton>} */}
                
                {/* </ThemeProvider> */} 

                <div>
        <Button
          ref={anchorRef}
          //id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: 'black' }}
        >
          <LanguageIcon/>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper style={{maxHeight: 400, overflow: 'auto'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{maxHeight: '10%', overflow: 'auto'}}
                  >
                    {countries.map((country) => (

                    <MenuItem onClick={handleClose}>{country.Name}</MenuItem>
                    
                    ))};
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

            </div>


        </nav>
     
    
    </>
  );
}

export default Navbar