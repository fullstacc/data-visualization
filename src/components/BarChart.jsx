import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";
import "./BarChart.css";

// It took way too long to realize I don't need to make this a d3 table

const dataSource =
  "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/05b1764df9916aec2e7f5bc03fcbd1e08e76661a/eurovision.csv";
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
const BarChart = () => {
  const margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 20,
  };

  const [data, setData] = useState([]);
  // use this to display the table
  const [winners, setWinners] = useState([])

  const d3Chart = useRef();

  // set up chart; call the ref from above

  // const width = parseInt(d3.select("#d3demo").style("width"));
  // const height = parseInt(d3.select("#d3demo").style("height"));

  // this is writing to a div below the svg
  // const svg = d3
  //   .select(d3Chart.current)
  //   .attr("width", '100%')
  //   .attr("height", '500')
  //   .style("background-color", "yellow")
  //   .append("g")
  //   .append("table");
  
  const reactTabulate = (data) => {
    const table = data
    console.log('type',typeof table)
    console.log('this is the data', table)
    console.log('first row',table[0])
    // console.log(table.columns)
    // console.log(table[0]['Year'])
    // console.log(table.rows)
    
//     table.columns.map((col)=> {
//       return (
      
//       )
//     })
    
    // table.map((record) => {
    //   // console.log(record['Year']) this works
    //   return ()
    // })
    
  }
  
  
  var tabulate = function (data,columns) {
  var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	thead.append('tr')
	  .selectAll('th')
	    .data(columns)
	    .enter()
	  .append('th')
	    .text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	    .data(data)
	    .enter()
	  .append('tr')

	var cells = rows.selectAll('td')
	    .data(function(row) {
	    	return columns.map(function (column) {
	    		return { column: column, value: row[column] }
	      })
      })
      .enter()
    .append('td')
      .text(function (d) { return d.value })

  return table;
}

  // this will run once, to load the data
  useEffect(() => {
    // go fetch the data using d3.csv()
    d3.csv(dataSource)
      .then((d) => {
      setData(d)
      tabulate(data, cols)
    })
      .catch((e) => console.log(e));
  }, []); // end useEffect
  
  const outputData = () => <div>{data}</div>
  
  // reactTabulate(data)


  // const output = tabulate(data, cols);


  //   return euroTable
  // }).catch(e => console.log(e));

  // } // end fetchTable

  // this component renders the svg table and element
  //   const DataTable = () => {
  //     // this isn't working because d3 is attempting to attempt to append to an svg that hasn't been
  //     // written by react yet
  //     return
  //     <g>fetchTable(dataSource)</g>

  //   }

  return (
    <div id="d3demo">
      <svg ref={d3Chart}></svg>
      <div></div>
    </div>
  );
};

export default BarChart;
