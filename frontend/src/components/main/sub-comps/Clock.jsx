import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-div">
      <h2>{time}</h2>
    </div>
  );
};

export default Clock;
