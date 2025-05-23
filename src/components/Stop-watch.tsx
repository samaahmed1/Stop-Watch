import { useEffect, useState } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const seconds = Math.floor(totalSeconds % 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section>
      <div className="container m-auto h-[100vh] flex flex-col justify-center items-center gap-5">
        <span className="text-4xl font-bold text-center">
          {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}
        </span>
        <div className="act flex gap-5 items-center">
          <button
            className="cursor-pointer w-16 p-2 font-semibold bg-red-500 text-white rounded"
            onClick={() => {
              setIsRunning(false);
              setTotalSeconds(0);
            }}
          >
            Reset
          </button>
          <button className="cursor-pointer w-16 p-2 font-semibold bg-green-500 text-white rounded" onClick={() => setIsRunning(true)}>
            Play
          </button>
          <button className="cursor-pointer w-16 p-2 font-semibold bg-yellow-500 text-white rounded" onClick={() => setIsRunning(false)}>
            Stop
          </button>
        </div>
      </div>
    </section>
  );
}
