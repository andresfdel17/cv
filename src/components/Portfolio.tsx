import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from './Header'
import { Profile } from './Profile'
import { Experience } from './Experience'
import { Academic } from './Academic'
import { Skills } from './Skills'
import { Interest } from './Interest'
import { Languages } from './Languages'

export const Portfolio = () => {
    return (
        <Container fluid>
            <Header />
            <Row>
                <Col sm>
                    <Profile />
                </Col>
                <Col sm>
                    <Experience />
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Academic />
                </Col>
                <Col sm>
                    <Skills />
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Interest />
                </Col>
                <Col sm>
                    <Languages />
                </Col>
            </Row>
        </Container>
    )
}
