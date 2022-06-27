import * as React from "react";
import DataTable from "../components/DataTable";
import Visualization from "../components/Visualization"

const Home = ({ data, dataStatus, visual, setVisual }) => {
  const title = "Data Visualizations";
  
  console.log('this is visual!', visual)
  
  
  // these options represent which visualization is available
  // const options = ['table',
  //                  'bar chart',
  //                 'heat-map',
  //                 'pie-chart']

  return (
    <>
      <h1 className="title">{title}</h1>

      
      <label for="pulldown">Choose a visualization: </label>

      <select name="pulldown" id="viz-pulldown">
        {visual.map((option) => {
          return (
          
            <option key={option.label} value={option.label}> {option.label} </option>
          )
          
        })}
      </select>
      
      <p>
        This page contains data visualizations produced using D3.js. The webpage
        application is developed using React, and is deployed using Glitch (for
        demonstration purposes).
      </p>
      
      <Visualization visual={visual} data={data}/>
      
    </>
  );
};

export default Home;


// <DataTable data={data} />