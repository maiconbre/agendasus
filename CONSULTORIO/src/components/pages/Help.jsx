import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../button/Btn-outline';
import CardItem from '../card/Card';


function Help() {
    return (
        <Container fluid className="help-full-content">
            <Row>
                <Col className='help-col'>
                    <div>
                        <h4 className='help-h4'>Como posso ajudar?</h4>
                        <div className="help-content">
                            <h4>Serviços online</h4>

                            <div className="help-card-itens">

                                <div className="card-item">
                                    <CardItem title='1' text='Exame de Sangue' className='card-itself' />
                                </div>

                                <div className="card-item">
                                    <CardItem title='2' text='Saúde em geral' className='card-itself'/>
                                </div>
                            
                                <div className="card-item">
                                    <CardItem title='3' text='Saúde mental'  className='card-itself'/>
                                </div>

                                <div className="card-item">
                                    <CardItem title='4' text='Preveção e bem-estar' className='card-itself'/>
                                </div>

                            </div>

                            <div className="help-btn">
                                <Btn frase="Agenda uma consulta online" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Help;