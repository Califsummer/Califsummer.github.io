import React from 'react'

import { Button, Typography } from '@mui/material';
import { useGeolocated } from "react-geolocated";

import { ThemeProvider } from 'styled-components';







import Contact from './components/contact/Contact'




import './components/about/about.css'
import About from './components/about/About';

const theme = {
  primaryColor: '#000',
  secondaryColor: '#fff',
};

const App = () => {




  
  
  return (
    <ThemeProvider theme={theme}>
        <Contact>

        </Contact>
        
          
        <About>
          
        </About>
    </ThemeProvider>

    
  )
}

export default App
