import * as React from "react";
import  BarChart  from "../components/BarChart";


export default function Home() {
  const hello = "Data Visualizations";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        This page contains data visualizations produced using D3.js. The webpage application is developed using React, and 
        is deployed using Glitch (for demonstration purposes).
      </p>
      <BarChart/>
    </>
  );
}
