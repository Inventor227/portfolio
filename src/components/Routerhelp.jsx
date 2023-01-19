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
import React from "react";
import Home from "./Home"
import { BrowserRouter,Route,Routes, Link } from "react-router-dom";
function Routerhelp()
{
    return (
<BrowserRouter>
<Routes>
<Route index element={<Home />} />
<Route path="/education" element={<Education />} />
<Route path="/achievements" element={<Achievements />} />
<Route path="/Projects" element={<Projects />} />
<Route path="/SocialHandles" element={<SocialHandles />} />
</Routes>
</BrowserRouter>
    );
}
export default Routerhelp