import React, { useEffect, useState } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());
    let timerId;
    function padStartDigit(digit) {
      return digit.toString().padStart(2, "0");
    }
    useEffect(() => {
      timerId = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => clearInterval(timerId);
    });
    return (
        <div>
        <span>{padStartDigit(date.getHours())}: </span>
        <span>{padStartDigit(date.getMinutes())}: </span>
        <span>{padStartDigit(date.getSeconds())}</span>
      </div>
    );
  }
export default Clock;
  
  