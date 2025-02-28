import React from "react";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/hello");
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
      <h1>{message}</h1>
    </div>
  );
};

export default MainContent;
