import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../profile.jpg';

export default function AboutMe(){
    return(
        <Row>
            <Col xs={12} md={8}>
                <h2>About Me</h2>
                <p>
                Hi, I'm creative soul that happen to be attracted to programming for some reason. Currently learning on Codecademy, great place to practice programming. 
                Nice to meet You, If you are interested in my work You can see my projects below
                </p>
            </Col>
            <Col xs={12} md={4}>
            <img src={img} alt="Profile"/>
            </Col>
        </Row>
    )
}
