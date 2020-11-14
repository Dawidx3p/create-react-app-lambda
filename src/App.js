import React, { useState } from 'react';
import './App.css';
import img from './profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGitSquare, faJsSquare, faReact, faNodeJs, faNpm} from '@fortawesome/free-brands-svg-icons';

    export default function App() {
      const [status, setStatus] = useState(true);
      const slide = () => {
        setStatus(!status);
        const contactBlock = document.getElementById('contactBlock');
        if(status){
          contactBlock.style.right = '0%';
        }else{
          contactBlock.style.right = '-100%';
        }
          
          
        };
        return (
          <div className="App">
            <Navbar bg="light" variant="light">
              <Navbar.Brand>Dawid Dębiec</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#home">About me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link onClick={slide}>Contact</Nav.Link>
              </Nav>
            </Navbar>
              <div id="contactBlock">
              <h1>Contact me via e-mail</h1>
              <p>dawiddebiecx@gmail.com</p>
            </div>
            <Container>
              <Row>
              <Col xs={12} md={8}>
                <h1>About Me</h1>
                <p>Hi, I'm creative soul that happen to be attracted to programming for some reason. Currently learning on Codecademy, great place to practice programming. 
                  Nice to meet You, If you are interested in my work You can see my projects below
                </p>
              </Col>
              <Col xs={12} md={4}>
                <img src={img} alt="Profile"/>
              </Col>
              </Row>
              <Row>
                <Col>
                  <h1>My projects</h1>
                  <ul><li>first one</li>
                  <li>Second</li>
                  <li>Third Project</li></ul>
                </Col>
              </Row>
              <Row>
                <Col>
                <h1>Skills</h1>
                <div className='icons'>
                <FontAwesomeIcon icon={faHtml5} size="3x"  />
                <FontAwesomeIcon icon={faCss3} size="3x"  />
                <FontAwesomeIcon icon={faGitSquare} size="3x"  />
                <FontAwesomeIcon icon={faJsSquare} size="3x"  />
                <FontAwesomeIcon icon={faReact} size="3x"  />
                <FontAwesomeIcon icon={faNodeJs} size="3x"  />
                <FontAwesomeIcon icon={faNpm} size="3x"  />
                </div></Col>
              </Row>
            </Container>
          </div>
        )
    }