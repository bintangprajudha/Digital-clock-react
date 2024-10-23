import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const[date, setDate] = useState(new Date())

  useState(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timerId);
  }, [])

  return (
    <>
      <div className="container min-w-96 my-20 p-6 max-w-sm mx-auto bg-teal-400 shadow-lg shadow-cyan-500/50 rounded-xl space-x-4">
        <h1 className="font-mono font-bold">{date.getHours()} : {date.getMinutes()} : {date.getSeconds() < 10 && "0"}{date.getSeconds()}</h1>
      </div>
    </>
  );
}

export default App;
