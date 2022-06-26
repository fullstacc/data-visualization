import * as React from "react";
import DataTable from "../components/DataTable";

const Home = ({ data, dataStatus, visual, setVisual }) => {
  const title = "Data Visualizations";
  
  const options = ['table',
                   'bar chart',
                  'heat-map',
                  'pie-chart']

  return (
    <>
      <h1 className="title">{title}</h1>

      
      <label for="pulldown">Choose a visualization: </label>

      <select name="pulldown" id="viz-pulldown">
        {options.map((option) => {
          return (
          <option value={option}> {option}</option>
          )
          
        })}
      </select>
      
      <p>
        This page contains data visualizations produced using D3.js. The webpage
        application is developed using React, and is deployed using Glitch (for
        demonstration purposes).
      </p>
      
      <DataTable data={data} />
      
    </>
  );
};

export default Home;
