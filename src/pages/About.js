import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Row>
                <Col  style={{margin: '30px 0px'}}>
                    <Card style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .4)', textAlign: 'right' }}>
                        <Card.Body>
                            <Card.Title>Education</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Bachelor of Science in Electrical & Electronic Engineering</Card.Subtitle>
                            <Card.Text>
                            North South University
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col  style={{marginBottom: '30px'}}>
                    <Card style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .4)', textAlign: 'right' }}>
                        <Card.Body>
                            <Card.Title>Experience</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">June 2020 - August 2020</Card.Subtitle>
                            <Card.Text>
                            Front End Developer <br/>
                            Vue Js & Quasar <br/>
                            @ "It Conquest"
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Feb 2018 - October 2019</Card.Subtitle>
                            <Card.Text>
                            Department Head & Course Instructor <br/>
                            Information & Communication Technology (ICT) <br/>
                            @ "Sir John Wilson School"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col style={{marginBottom: '30px'}}>
                    <Card style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .4)', textAlign: 'right' }}>
                        <Card.Body>
                            <Card.Title>Skills</Card.Title>
                            <Card.Text>
                            React Js, Redux, Hooks, <br/>
                             Quasar, Vue Js, Vuex, <br/>
                            Javascript, Firebase, NPM, <br/> 
                            Bootstrap, CSS, HTML
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default About;
