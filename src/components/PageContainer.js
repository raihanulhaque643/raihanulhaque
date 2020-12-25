import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import styles from './PageContainer.module.css';

const PageContainer = () => {
    return (
        <div className={styles.pageContainer}>
        <Container>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Container>
        </div>
    )
}

export default PageContainer;
