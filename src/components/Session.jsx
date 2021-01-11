import React from 'react';
import moment from 'moment';

const Session = (props) => {
    const {
        sessionLength, 
        decrementSessionLength,
        incrementSessionLength
    } = props;
    const sessionLengthInMins = moment.duration(sessionLength, 's').minutes();
    return(
        <div>
            <p id="Session-label"> Hello </p>
            <p id="Session-length"> {sessionLengthInMins} </p><div className=""></div>
            <button onClick={decrementSessionLength}>-</button>
            <button onClick={incrementSessionLength}>+</button>
        </div>
    )
}
export default Session