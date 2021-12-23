import React, { useState, useEffect } from "react";
import "./CurrentTime.css";

function CurrentTime() {
  const [timeState, setTimeState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTimeState(new Date()), 1000);
  }, []);
  return (
    <section className='centered card1'>
      <p>Today's Date:</p>
      <p>{new Date().toLocaleDateString('en-US', {
        dateStyle: 'full'
      })}</p>
      <div>
        <p>Current Time (24hr):</p>
        <p>
          {timeState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: '2-digit',
            hour12: false,
          })}
        </p>
      </div>
      <div>
        <p>Current Time (12hr):</p>
        <p>{timeState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: '2-digit',
          hour12: true,
        })}</p>
      </div>
    </section>
  );
}

export default CurrentTime;
