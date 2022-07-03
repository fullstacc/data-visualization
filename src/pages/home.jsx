import * as React from "react";
import DataTable from "../components/DataTable";
import Visualization from "../components/Visualization";
import Form from "../components/Form";
import {useState} from "react";

const Home = ({ data, dataStatus }) => {
  const vizOptions = [
    { label: "", value: "none" },
    { label: "table", value: "table" },
    { label: "bar chart", value: "bar chart" },
    { label: "heat map", value: "heat map" },
    { label: "pie chart", value: "pie chart" },
  ];
  
  const [currentVisual, setCurrentVisual] = useState("")
  
  
  // method for setting state based on pulldown
  const handleVisual = (event) => {
    console.log(event.target.value);
    setCurrentVisual(event.target.value);
    console.log('currentVisual is now ', currentVisual)
  };
  

  return (
    <>
      <Form vizOptions={vizOptions}
        currentvisual={currentVisual}
        handleVisual={handleVisual}/>
      
      <Visualization currentVisual={currentVisual} data={data} />
    </>
  );
};

export default Home;

// <DataTable data={data} />
