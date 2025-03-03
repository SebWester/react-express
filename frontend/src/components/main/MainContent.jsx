import React from "react";
import { useEffect, useState } from "react";
import TestFetch from "./TestFetch";
import Button from "./sub-comps/Button";
import Clock from "./sub-comps/Clock";

const MainContent = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  function changeComps() {
    setCount((prevCount) => (prevCount >= 1 ? 0 : 1));
  }

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("/api/hello");
        const data = await response.json();

        console.log(data);
        setMessage(data.message);
      } catch (err) {
        console.log("Something went wrong:", err);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="main-content">
      {count === 0 ? <h1>{message}</h1> : <TestFetch />}

      <Button onClick={changeComps} />
      <Clock />
    </div>
  );
};

export default MainContent;
