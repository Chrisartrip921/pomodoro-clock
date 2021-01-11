import React from 'react';
import moment from 'moment';

const Break = (props) => {
    const {
        breakLength,
        decrementBreakLength,
        incrementBreakLength
    } = props;
    const breakLengthInMins = moment.duration(breakLength, 's').minutes();
    return(
        <div>
            <p id="break-label"> Hello </p>
            <p id="break-length"> {breakLengthInMins} </p><div className=""></div>
            <button onClick={decrementBreakLength}>-</button>
            <button onClick={incrementBreakLength}>+</button>
        </div>
    )
}
export default Break