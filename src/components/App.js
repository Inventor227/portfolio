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
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <Col>
            <Image
            src=
              "https://media.licdn.com/dms/image/C4E03AQHrIZT_0UdYXg/profile-displayphoto-shrink_400_400/0/1631440704592?e=1679529600&v=beta&t=IwoAQRXCKBuw_6j9PMTdZvYdAyMBOxOYaipVeO52I9Y"
            roundedCircle={true}
            width="200" height="200" align="center" 
          />
          </Col>
        </Row>
        <Card classaName="mt-auto p-2" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="" /> */}
      <Card.Body>
        <Card.Title>About Myself</Card.Title>
        <Card.Text>
          I am Student At Jaypee Institute Of Information Technology
Noida Sector 62. I am a technology enthusiast with strong
communication skills and a knack for problem
solving. Seeking entry level Software
Engineering roles with organizations engaged in
uisng technology to solve complex problems
and customer needs
        </Card.Text>
    
      </Card.Body>
    </Card>
      </Container>
<Navbar bg="light">
        <Container>
          <Navbar.Brand  >Education</Navbar.Brand>
          <Education />
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand > Achievements</Navbar.Brand>
          < Achievements />
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
           Projects
          </Navbar.Brand>
          <Projects />
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              // src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}
            Social platforms
          </Navbar.Brand>
          <SocialHandles />
        </Container>
      </Navbar>
   
    </div>


  );
}

export default App;
