import React from "react"
import Educationhelp from "./educationhelp" 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Education from "./education";
import Achievements from "./achievements";
import Projects from "./Projects"
import SocialHandles from "./SocialHandles"

import { BrowserRouter, Link } from "react-router-dom";

function education ()
{
    return (
        <div>

           <Educationhelp 
        heading="BTECH-COMPUTER SCIENCE AND
ENGINEERING"
         content="Jaypee Institute Of Information Technology
Noida Sector 62"
          
          extracontent="CGPA 8.4"
          time="07/2020 - present"  />
           <Educationhelp 
        heading="CLASS 12th"
         content="City Montessori School,Luckow"
          extracontent="92 percentage"
          time="2019"  />
           <Educationhelp 
        heading="CLASS 10th"
         content="City Montessori School,Luckow"
          extracontent="95 percentage"
          time="2017"  />
        </div>
        
    )
}
export default education