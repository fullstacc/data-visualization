import * as React from "react";
import  DataTable  from "../components/DataTable";


const Home = () => {
  const hello = "Data Visualizations";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        This page contains data visualizations produced using D3.js. The webpage application is developed using React, and 
        is deployed using Glitch (for demonstration purposes).
      </p>
      <svg style={{height: '100%', width: '100%'}}></svg>
      <DataTable/>
    </>
  );
}

export default Home
