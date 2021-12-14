import React from "react";
import "./CurrentTime.css";
import time from '../utils/getCurrentTime';
import date from '../utils/getCurrentDate';
import convertedTime from "../utils/24to12conversion";

function CurrentTime() {
  return (
    <section className='centered card1'>
      <p>Today's Date:</p>
      <p>{date}</p>
      <div>
        <p>Current Time (24hr):</p>
        <p>{time}</p>
      </div>
      <div>
        <p>Current Time (12hr):</p>
        <p>{convertedTime}</p>
      </div>
    </section>
  );
}

export default CurrentTime;
