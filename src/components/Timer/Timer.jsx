import { useState, useEffect, useRef } from "react";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [countDown, setCountDown] = useState(1500);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCountDown(prevCountDown => prevCountDown - 1);
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function startCountDown() {
    if (!isRunning) {
      setIsRunning(true);
    }
  }

  const formattedCountDown = formatTime(countDown);

  return (
    <div>
      <div>{formattedCountDown}</div>
      <button onClick={startCountDown}>Start</button>
      <p>
        All results will be measured from the countdown and can be viewed on
        the results page.
      </p>
    </div>
  );
}
