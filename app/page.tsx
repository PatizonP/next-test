"use client";
import { useState } from "react";

export default function Home() {
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const handleReset = async () => {
    await fetch("/api/reset");
  };
  console.log(process.env);
  const handleFetch = async () => {
    // time before
    const startTime = new Date().getTime();
    const data = await fetch("/api").then((res) => res.json());

    setDate(data.date);

    console.log(data.date);

    const endTime = new Date().getTime();

    setDuration((endTime - startTime) / 1000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleFetch}>Click me to fetch</button>
      <button onClick={handleReset}>Reset</button>
      <p>Duration: {duration} seconds</p>
      <p>Date: {date?.toString()}</p>
    </main>
  );
}
