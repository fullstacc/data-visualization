import * as d3 from 'd3'
import React from 'react'


const BarChart = () => {
  
    // TO DO: Understand translate, transform; scaleBand
  
  const dataSource = "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/05b1764df9916aec2e7f5bc03fcbd1e08e76661a/eurovision.csv"

/* Functions passed to useEffect are executed on every component rendering—unless you pass a 
second argument to it.
If the second argument is an empty array, like the example above, it will behave exactly 
like the componentDidMount, only executing on the first rendering.
*/
  
  //renderChartFn is callback containing d3 function to be executed
  // dependencies is the array which the useEffect is based on
  const useD3 = (renderChartFn, dependencies) => {
    const ref = React.useRef();
    
    React.useEffect(() => {
      renderChartFn(d3.select(ref.current))
      return ()=> {}
    }, dependencies)
    return ref
    
  }
  
  const ref = useD3((svg) => {
    
      // set margins for the graph
  const margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 20
  }
  const width = 1800 - margin.left - margin.right
  const height= 1800 - margin.top - margin.bottom
  
  // set the ranges
const x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
const y = d3.scaleLinear()
          .range([height, 0]);
    
  })
  
  

  
// -----------------------------------------------------
  

  

// a method for retrieving data and creating an html table
const fetchTable = (dataSource) => {


  // get the data
d3.csv(dataSource).then((d) => {
  console.log('whole array',d)
  console.log('first element',d[0])
  
  
  // tabulate function
  // credit here: I modernized this ES5 template and adapted it
  // https://bl.ocks.org/d3noob/473f0cf66196a008cf99
  
  const tabulate = (data, columns) => {
    const table = d3.select("svg").append("table")
    .attr("style", "margin-left: 250px");
    const thead = table.append("thead");
    const tbody = table.append("tbody");
    
    // append header row
    thead.append("tr")
    .selectAll("th")
    .data(columns)
    .enter()
    .append("th")
    .text(column => column)
    
    
    // rows for each object in csv
    const rows = tbody.selectAll("tr")
    .data(data)
    .enter()
    .append("tr")
    
    // for ea row, attach a <td> and map the columns to 
    // create a cell in each row for each column
    const cells = rows.selectAll("td")
        .data(function(row) {
            return columns.map(function(column) {
                return {column: column, value: row[column]};
            });
        })
        .enter()
        .append("td")
        .attr("style", "font-family: Courier") // sets the font style
            .html(function(d) { return d.value; });
    
    console.log('table generated!',table)
    return table
  }
  
  
  // // render the table
  const euroTable = tabulate(d, ["Date", "Host City", "Language","maxPoints", "Performer(s)","Points","Song","Songwriter(s)","Winner","Year"])
  
  return euroTable
}).catch(e => console.log(e));
  
}

  // this component renders the svg table and element
  const DataTable = () => {
    // this isn't working because d3 is attempting to attempt to append to an svg that hasn't been
    // written by react yet
    fetchTable(dataSource)
  }


  
  return (
  <div>
      <svg style={{height: '100%', width: '100%'}}></svg>
      <DataTable/>
  
  </div>
      
  )
}

export default BarChart