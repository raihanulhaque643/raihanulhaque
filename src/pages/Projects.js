import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import car from '../assets/car.png';
import bikroy from '../assets/bikroy.png';
import ecom from '../assets/ecom.png';
import youtube from '../assets/youtube.png';

const Projects = () => {
    return (
        <div>
        <Row>
        <Col sm="12" md="6" lg="4">
            <Card style={{width: 'auto', background: 'rgba(0,0,0,0.5)', margin: '30px 0px', minHeight: '420px' }}>
            <Card.Img variant="top" src={car} />
            <Card.Body>
                <Card.Title>Car Garage</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Live: <a target="blank" href="https://car-garage-bd.firebaseapp.com/">https://car-garage-bd.firebaseapp.com/</a> </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Code: <a target="blank" href="https://github.com/raihanulhaque643/crud-invoice-app">https://github.com/raihanulhaque643/crud-invoice-app</a> </Card.Subtitle>
                <Card.Text>
                React, redux, firebase CRUD app with auth and firestore for invoicing of automobile workshop.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col sm="12" md="6" lg="4">
            <Card style={{ width: 'auto', background: 'rgba(0,0,0,0.5)', margin: '30px 0px', minHeight: '420px'   }}>
            <Card.Img variant="top" src={bikroy} />
            <Card.Body>
                <Card.Title>Bikroy Clone</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Live: <a target="blank" href="https://bikroy-clone.firebaseapp.com/home">https://bikroy-clone.firebaseapp.com/home</a> </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Code: <a target="blank" href="https://github.com/raihanulhaque643/bikroy-clone">https://github.com/raihanulhaque643/bikroy-clone</a> </Card.Subtitle>
                <Card.Text>
                Replica of Bikroy.com using React, Redux & Firebase.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col sm="12" md="6" lg="4">
            <Card style={{ width: 'auto', background: 'rgba(0,0,0,0.5)', margin: '30px 0px', minHeight: '420px'  }}>
            <Card.Img variant="top" src={ecom} />
            <Card.Body>
                <Card.Title>Crwn Clothing</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Live: <a target="blank" href="https://crwn-ecommerce-raihanul.herokuapp.com/">https://crwn-ecommerce-raihanul.herokuapp.com/</a> </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Code: <a target="blank" href="https://github.com/raihanulhaque643/crwn-clothing">https://github.com/raihanulhaque643/crwn-clothing</a> </Card.Subtitle>
                <Card.Text>
                A basic e-commerce using React Js.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col sm="12" md="6" lg="4">
            <Card style={{ width: 'auto', background: 'rgba(0,0,0,0.5)', margin: '30px 0px', minHeight: '420px'  }}>
            <Card.Img variant="top" src={youtube} />
            <Card.Body>
                <Card.Title>Fake Youtube</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Live: <a target="blank" href="https://clone-ea192.web.app/">https://clone-ea192.web.app/</a> </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Code: <a target="blank" href="https://github.com/raihanulhaque643/youtube-clone">https://github.com/raihanulhaque643/youtube-clone</a> </Card.Subtitle>
                <Card.Text></Card.Text>
                <Card.Text>
                Youtube-clone using React Js.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </Row>
        </div>
    )
}

export default Projects;
