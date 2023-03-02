import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Pages.css'
import Btn from '../../components/button/Btn';
import { Zoom } from "react-awesome-reveal";


function Home() {
    return (
      <Container fluid className="full-width-container" id='home'>

        <Row className='container-row'>
          <Col sm={8}className='col-itself c1'>
            <img src="./assets/img-home.jpg" alt="" className="full-width-img" />
          </Col>
          <Col sm={4} className='col-itself c2'>
            <div className="c2-text">
              <span>Saúde acessível para todos</span>
              <h1>Dra. Alice Sá</h1>
              <h4>Serviços médicos online</h4>
            </div>
            <Zoom>
              <div className='c2-btn'><Btn frase="Saiba Mais"/></div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    );
  }

export default Home;