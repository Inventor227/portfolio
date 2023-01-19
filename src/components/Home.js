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
import { BrowserRouter, Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/achievements">achievements</Link>
                    </li>
                    <li>
                        <Link to="/Projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/SocialHandles">SocialHandles</Link>
                    </li>
                </ul>
            </nav> */}
            <Navbar bg="light">
        <Container>
          <Navbar.Brand >
          <Link to="/education" >Education</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
          <Link to="/achievements">Achievements</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand >
          <Link to="/Projects">PROJECTS</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
          <Link to="/SocialHandles">Social Handles</Link>
          </Navbar.Brand>  
        </Container>
      </Navbar>
        </>
    )
};

export default Home;