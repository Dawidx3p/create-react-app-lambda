import './Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Popover, OverlayTrigger } from 'react-bootstrap';


        export default function Footer(){ 
          const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">dawiddebiecx@gmail.com</Popover.Title>
            </Popover>
          );
            return(
            <div className="Footer">
              <h4>Contact</h4>
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <FontAwesomeIcon id="mail" icon={faEnvelope} size="3x" />
              </OverlayTrigger>
              <a target="_blank" href='https://www.linkedin.com/in/dawid-debiec/'><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
              
            </div>
            );
        };