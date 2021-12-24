import React, { useState } from "react";
import "./CurrentTime.css";
import TwelveHourTime from "./TwelveHourTime";
import TwentyFourHourTime from "./TwentyFourHourTime";

function CurrentTime() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className='centered card1'>
      <div>
        <p id='big-time' onClick={handleClick}>
          {toggle ? <TwelveHourTime /> : <TwentyFourHourTime />}
        </p>
        (click to toggle)
        <p>
        {new Date().toLocaleDateString("en-US", {
          dateStyle: "full",
        })}
      </p>
      </div>
    </section>
  );
}

export default CurrentTime;
