import React, { useEffect, useState } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

const TimeLeft = ({sessionLength, breakLength}) => {
    const [currentSessionType, setCurrentSessionType] = useState('Session');
    const [intervalId, setIntervalId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(sessionLength)
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false})

    useEffect(() =>{
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const isStarted = intervalId != null;

    const handleStartStopClick = () => {
        if(isStarted){
            clearInterval(intervalId);
            setIntervalId(null);
        } else {

            
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => {
                    const newTimeLeft = prevTimeLeft - 1;
                    if(newTimeLeft >= 0) {
                        return prevTimeLeft - 1;
                    } 
                    if(currentSessionType === 'Session') {
                        setCurrentSessionType('Break');
                        setTimeLeft(breakLength);
                    } else if(currentSessionType === 'Break') {
                        setCurrentSessionType('Session');
                        setTimeLeft(sessionLength);
                    }
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    }
    return (
        <div>
            <p id="timer-label">{currentSessionType}</p>
            <p>{formattedTimeLeft}</p>
            <button onClick={handleStartStopClick}>{isStarted ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default TimeLeft;