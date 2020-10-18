import React, { useEffect, useState } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DayValue } from 'react-modern-calendar-datepicker';

interface TimeSelectionsProps {
    dueDate: DayValue | null;
}

const TimeSections: React.FC<TimeSelectionsProps> = (props) => {
    const [remainingTime, setRemainingTime] = useState<Date | null>(null);
    const now = new Date();
    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
        if(timer) { clearTimeout(timer) }
        
        timer = setTimeout(() => {
            computeDiff()
        }, 1000);
    }

    useEffect(() => {
        startTimer();

        return () => {
            if(timer) { clearTimeout(timer) }
        };
    });

    useEffect(() => {
        startTimer();
    }, [props.dueDate]);

    const computeDiff = () => {
        if(!props.dueDate) {
            return;
        }

        const dueDate = new Date(props.dueDate.year, props.dueDate.month, props.dueDate.day);
        const diff = dueDate.getTime() - now.getTime();

        if(diff <= 0) {
            if(timer) { clearTimeout(timer) }
        }

        const newDate = new Date(diff);
        setRemainingTime(newDate);
    }

    return (
        <Container>
            <Row>
                <Col className="clock-column">
                    <p className="clock-timer">{remainingTime? remainingTime.getDay() : "D"}</p>
                    <p className="clock-label">Days</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">{remainingTime? remainingTime.getHours() : "H"}</p>
                    <p className="clock-label">Hours</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">{remainingTime? remainingTime.getMinutes() : "M"}</p>
                    <p className="clock-label">Minutes</p>
                </Col>
                <Col className="clock-column">
                    <p className="clock-timer">{remainingTime? remainingTime.getSeconds() : "S"}</p>
                    <p className="clock-label">Seconds</p>
                </Col>  
            </Row>   
        </Container>     
    );
}

export default TimeSections;