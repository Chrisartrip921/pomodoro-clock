import React from 'react';
import moment from 'moment';
import { useState } from 'react';
const Break = () => {
    const [breakLength, setBreakLength] = useState(0)

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;
        if(newBreakLength < 0) {
            setBreakLength(0);    
        } else {
            setBreakLength(newBreakLength)  
        }
        
    }
    const incrementBreakLength = () => {
        setBreakLength(breakLength + 60);
    }
    const breakLengthInMins = moment.duration(breakLength, 's').minutes();
    return(
        <div>
            <p id="break-label"> Hello </p>
            <p id="break-length"> {breakLengthInMins} </p>
            <button onClick={decrementBreakLength}>-</button>
            <button onClick={incrementBreakLength}>+</button>
        </div>
    )
}
export default Break