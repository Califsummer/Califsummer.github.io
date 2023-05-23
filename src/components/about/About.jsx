import React from 'react'
import './about.css'
import ME from '../../assets/m.JPG'
import { Typography, Container, Card, CardContent } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FaGithubSquare from '@mui/icons-material/GitHub';
import FaInstagramSquare from '@mui/icons-material/Instagram';
import { typography } from '@mui/system';


const About = () => {
  return (
    <div className="container">
      <div className="image-cropper">
        <img src={ME} ></img>
      
      </div>
      
      

      <div className="about_socials">

        <p className="my-text-style-latin">Homo sum, humani nihil a me alienum puto</p>
        <p className="my-text-style-english">Dance, dance, dance!</p>
        <p className="my-text-style-french">Les modes passent, le style est éternel,<br/> la mode est futile, le style pas</p>
        <p className="my-text-style-german">Seid umschlungen, Millionen! Diesen Kuss der ganzen Welt!</p>

        <a href="https://www.linkedin.com/in/wangyunhuang532435195/" target="_blank"><LinkedInIcon/></a>
        <a href="https://github.com/Califsummer/" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/the12oaks/" target="_blank"><FaInstagramSquare/></a>
        
      </div>

    </div>
    
    
  )
}

export default About
