import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("");

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
    console.log(newTime);
  };

  return (
    <div className="container">
      <h1>TIME</h1>
      <p>Current Time: {currentTime}</p>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
