import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";

// It took way too long to realize I don't need to make this a d3 table

const dataSource =
  "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/0832453379cd6368558d51258786e5241bc2010e/eurovision.csv";
const cols = [
  "Date",
  "Host City",
  "Language",
  "maxPoints",
  "Performer(s)",
  "Points",
  "Song",
  "Songwriter(s)",
  "Winner",
  "Year",
];

// Table Component
const DataTable = () => {
  const margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 20,
  };

  const [data, setData] = useState([]);
  // use this to display the table
  const [winners, setWinners] = useState([]);

  const d3Chart = useRef();


  // this will run once, to load the data
  useEffect(() => {
    // go fetch the data using d3.csv()
    d3.csv(dataSource)
      .then((d) => {
        setData(d);
        
        if (data.length > 1) {
          console.log("data is loaded", data);
        }
        // tabulate(data, cols)
        // reactTabulate(data)
      })
      .catch((e) => console.log(e));
  }, []); // end useEffect



  return (
    <div >
      <table>
        <tr>
        {cols.map((col) => {
            return <th>{col}</th>
          })}
        </tr>
      {data.map((entry) => {
        return <tr> 
        <td>{entry.Date}</td>
          <td>{entry["Host city"]}</td>
          <td>{entry["Language"]}</td>
          <td>{entry["maxPoints"]}</td>
          <td>{entry["Performer(s)"]}</td>
          <td>{entry["Points"]}</td>
          <td>{entry["Song"]}</td>
          <td>{entry["Songwriter(s)"]}</td>
          <td>{entry["Winner"]}</td>
          <td>{entry["Year"]}</td>
        </tr>;
      })}
        </table>
    </div>
  );
};

export default DataTable;
