import React from 'react'
import './about.css'
import ME from '../../assets/ME.JPG'
import { Typography, Container, Card, CardContent } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FaGithubSquare from '@mui/icons-material/GitHub';
import FaInstagramSquare from '@mui/icons-material/Instagram';


const About = () => {
  return (
    <div>
      <div class="image-cropper">
      <img src={ME} ></img>

      </div>

      <div class="about_socials">
        <a href="https://www.linkedin.com/in/wangyunhuang532435195/" target="_blank"><LinkedInIcon/></a>
        <a href="https://github.com/Califsummer/" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/the12oaks/" target="_blank"><FaInstagramSquare/></a>
      </div>

    </div>
    
    
  )
}

export default About
