import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CountdownTimer = () => {
    return (
        <Container>
            <Row>
                <Col className="clock-column">
                    <p className="clock-timer">D</p>
                    <p className="clock-label">Days</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">H</p>
                    <p className="clock-label">Hours</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">M</p>
                    <p className="clock-label">Minutes</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">S</p>
                    <p className="clock-label">Seconds</p>
                </Col>  
            </Row>   
        </Container>     
    );
}

export default CountdownTimer;