import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGitSquare, faJsSquare, faReact, faNodeJs, faNpm} from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills(){
    return(
        <Row>
            <Col>
                <h2>Skills</h2>
                    <FontAwesomeIcon icon={faHtml5} size="3x"  />
                    <FontAwesomeIcon icon={faCss3} size="3x"  />
                    <FontAwesomeIcon icon={faGitSquare} size="3x"  />
                    <FontAwesomeIcon icon={faJsSquare} size="3x"  />
                    <FontAwesomeIcon icon={faReact} size="3x"  />
                    <FontAwesomeIcon icon={faNodeJs} size="3x"  />
                    <FontAwesomeIcon icon={faNpm} size="3x"  />
            </Col>
        </Row>
    )
}
