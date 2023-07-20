import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Calendar from "./Calendar"; // Import the Calendar component
import "./styles.css";

export default function App() {
  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    }
  ];

  const dates = Array.from({ length: 28 }, (x, i) => i + 1);

  // The following creates an array of numbers from [1..28]
  return (
    <div className="App">
      <h1>React Calendar</h1>
      <Calendar days={days} dates={dates} />
    </div>
  );
}

