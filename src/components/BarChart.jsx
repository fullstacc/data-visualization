import * as d3 from 'd3'

const BarChart = () => {
  
  // set margins for the graph
  const margin = {
    top: 30,
    right: 20,
    bottom: 30,
    left: 20
  }
  const width = 1800 - margin.left - margin.right
  const height =1800 - margin.top - margin.bottom
  
  // TO DO: Understand translate, transform; scaleBand
  
  // append the svg object to the body of the page
// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

const dataSource = "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/05b1764df9916aec2e7f5bc03fcbd1e08e76661a/eurovision.csv"
// get the data
d3.csv(dataSource).then((d) => {
  console.log('whole array',d)
  console.log('first element',d[0])
  
  
  // tabulate function
  // credit here: I modernized this ES5 template and adapted it
  // https://bl.ocks.org/d3noob/473f0cf66196a008cf99
  
  const tabulate = (data, columns) => {
    const table = d3.select("#data-table").append("table")
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
    
    return table
  }
  
  
  // render the table
  const euroTable = tabulate(d, ["Date", "Host City", "Language","maxPoints", "Performer(s)","Points","Song","Songwriter(s)","Winner","Year"])

}).catch(e => console.log(e));

  
  return (
  <div>
      <div id="data-table"></div>
      <div id="bar-chart"></div>
  </div>
      
  )
}

export default BarChart