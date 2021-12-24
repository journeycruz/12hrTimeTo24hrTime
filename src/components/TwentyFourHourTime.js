import React, { useState, useEffect } from 'react'

function TwentyFourHourTime() {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }));

    useEffect(() => setInterval(() => setTime(new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    })), 1000), [])

    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default TwentyFourHourTime
