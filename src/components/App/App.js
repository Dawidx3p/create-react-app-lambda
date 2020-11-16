import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavBar from '../Nav/nav';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';


    export default function App() {
        return (
          <div className="App">
            <NavBar />
            <Container>
              <AboutMe />
              <MyProjects />
              <Skills />
            </Container>
            <Footer />
          </div>
        )
    }