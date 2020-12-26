import React from 'react';
import { Card, Col, Jumbotron, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Jumbotron style={{background: 'rgba(0,0,0,0)'}}>
                <Row>
                    <Col  style={{margin: '30px 0px'}}>
                        <Card style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .4)', textAlign: 'right' }}>
                            <Card.Body>
                                <Card.Subtitle className="mb-3"><a target="blank" href="https://www.linkedin.com/in/raihanul-haque-a310ba158/">Linkedin</a> </Card.Subtitle>
                                <Card.Subtitle className="mb-3"><a target="blank" href="https://github.com/raihanulhaque643">Github</a></Card.Subtitle>
                                <Card.Subtitle className="mb-2">raihan.hd.500@gmail.com</Card.Subtitle>
                                <Card.Subtitle className="mb-2">Bashundhara R/a, Dhaka. Bangladesh.</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact;
