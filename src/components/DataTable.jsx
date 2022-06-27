import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";
import "./DataTable.css";

// It took way too long to realize I don't need to make this a d3 table

// Table Component
const DataTable = ({ data }) => {
  // const margin = {
  //   top: 30,
  //   right: 20,
  //   bottom: 30,
  //   left: 20,
  // };

  // const d3Chart = useRef();

  if (data.length > 1) {
    const cols = data.columns;
    console.log('these are the columns!', cols)
    return (
      <div>
        <table>
          <tbody>
          <tr>
            {cols.map((col) => {
              return <th>{col}</th>;
            })}
          </tr>
          {data.map((entry) => {
              console.log('first data entry',entry)
              
              
              // this logic addresses the fact that in 1969, there were (3) winners 
              let entryYear = entry["Year"]
              let hostCity = entry["Host city"]
              let date = entry["Date"]
              if (entry["Year"].length < 1){
                entryYear = "1969"
                hostCity = "Madrid"
                date = "29 March"
              }
             
              
              
            return (<tr>
              <td>{entryYear}</td>
              <td>{hostCity}</td>
              <td>{date}</td>
              <td>{entry["Winner"]}</td>
              <td>{entry["Song"]}</td>
              <td>{entry["Performer(s)"]}</td>
              <td>{entry["Songwriter(s)"]}</td>
              <td>{entry["Language"]}</td>
              <td>{entry["Points"]}</td>
              <td>{entry['Percentage of\nmaximum possible points']}</td>
              
              
            </tr>)
          })}
            </tbody>
        </table>
      </div>
    );
  } else {
    return <div>Data not yet loaded</div>;
  }
};

export default DataTable;
