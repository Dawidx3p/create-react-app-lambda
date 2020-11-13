import React, { useState } from 'react';
import './App.css';

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
            <div id="contactBlock">
              <h1>Contact Me via Email</h1>
              <p>> dawiddebiecx@gmail.com</p>
            </div>
            <section className="text">
              <h1>About Me</h1>
              <p>Hi, I'm creative soul that happen to be attracted to programming for some reason. Currently learning on Codecademy, great place to practice programming. 
                Nice to meet You, If you are interested in my work You can see my projects below
              </p>
            <h1>My projects</h1>
            <li>first one</li>
            </section>
            <section className="img">
              <img src="profile.jpg"/>
            </section>
            <section className="contact">
              <button className="contact-button" onClick={slide}>Contact</button>
            </section>
          </div>
        )
    }