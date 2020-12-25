import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from '../index.css';

const Home = () => {
    return (
       <div className="">
            <Row>
                <Col  style={{margin: '30px 0px'}}>
                    <Card style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, 0)', textAlign: 'right', border:'none' }}>
                        <Card.Body>
                        <Card.Title>
                            <h1>Hey! I'm Raihan. <br/>
                            I build 
                             user interfaces <br/>
                             with Vue & React.
                            </h1>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
       </div>
    )
}

export default Home;
