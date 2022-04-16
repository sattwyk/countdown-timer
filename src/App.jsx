import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import BackGround from "./assets/bg-stars.svg";
import Box from "./components/Box";
function App() {
  const [secs, setSecs] = useState(1980132); // days

  const dateObj = giveDays(secs);

  useEffect(() => {
    return () => {
      setInterval(() => setSecs((prev) => prev - 1), 1000);
    };
  }, []);

  function giveDays(secs) {
    const day = Math.floor(secs / 86400);

    const hour = Math.floor((secs % 86400) / 3600);

    const min = Math.floor((secs % 3600) / 60);

    const sec = Math.floor(secs % 60);

    return { day, hour, min, sec };
  }

  return (
    <div className="App">
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className="Boxes">
        <Box value={dateObj.day} title="Days" />
        <Box value={dateObj.hour} title="Hours" />
        <Box value={dateObj.min} title="Minutes" />
        <Box value={dateObj.sec} title="Seconds" />
      </div>
    </div>
  );
}

export default App;
