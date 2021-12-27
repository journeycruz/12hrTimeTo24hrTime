import React, { useState, useEffect } from 'react'

export const TwelveHourTime = () => {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    }));

    useEffect(() => setInterval(() => setTime(new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    })), 1000), [])

    return (
        <div>
            <p>{time}</p>
        </div>
    )
}