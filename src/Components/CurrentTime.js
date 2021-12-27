import React, { useState } from "react";
import "../styles/CurrentTime.css";
import TwelveHourTime from "./TwelveHourTime";
import TwentyFourHourTime from "./TwentyFourHourTime";

export const CurrentTime = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <main className='centered'>
      <div>
        <p id='big-time' onClick={handleClick}>
          {toggle ? <TwelveHourTime /> : <TwentyFourHourTime />}
        </p>
        (click to toggle)
        <p>
        <br />
        {new Date().toLocaleDateString("en-US", {
          dateStyle: "full",
        })}
      </p>
      </div>
    </main>
  );
}