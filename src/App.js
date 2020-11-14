import React, { useState } from 'react';
import './App.css';
import img from './profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

            <nav>
              <h1>Dawid Dębiec</h1>
              <ul class="navigation-items">
                <li>About me</li>
                <li>Projects</li>
                <li onClick={slide}>Contact</li>
              </ul>
              <div id="contactBlock">
              <h1>Contact me via E-mail</h1>
              <p>dawiddebiecx@gmail.com</p>
            </div>
            </nav>
            <Container>
              <Row>
              <Col xs={12} md={6}>
                <h1>About Me</h1>
                <p>Hi, I'm creative soul that happen to be attracted to programming for some reason. Currently learning on Codecademy, great place to practice programming. 
                  Nice to meet You, If you are interested in my work You can see my projects below
                </p>
                <h1>My projects</h1>
                <li>first one</li>
              </Col>
              <Col xs={12} md={6}>
                <img src={img} alt="Profile"/>
              </Col>
              </Row>
            </Container>
          </div>
        )
    }