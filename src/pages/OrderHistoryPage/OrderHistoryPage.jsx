import { useState, useEffect, useRef } from "react";

export default function OrderHistoryPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [savedTime, setSavedTime] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSavedTime(timeElapsed);
  }, [timeElapsed]);

  function startStopWatch() {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
    }
  }

  function stopStopWatch() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      setSavedTime(timeElapsed);
      setTimeElapsed(timeElapsed);
    }
  }

  return (
    <>
      <h1>How Productive Are you Today?</h1>
      <h3>"Working"</h3>
      <button onClick={stopStopWatch}>Stop</button>
      <button onClick={startStopWatch}>Start</button>
      <div>{timeElapsed}</div>
      <h3>Taking a break</h3>
      <button>Stop</button>
      <button>Start</button>
      <h3>Eating</h3>
      <button>Stop</button>
      <button>Start</button>
      <h3>Excercise</h3>
      <button>Stop</button>
      <button>Start</button>
      <p>
        All results will be measured from the last "STOP" and can be viewed on
        the results page.
      </p>
    </>
  );
}
