const dataSource =
  "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/0832453379cd6368558d51258786e5241bc2010e/eurovision.csv";
import * as d3 from "d3";
import axios from "axios";

const DataFetcher = (props) => {
  return 1;
};

//
// const getAll = () => {
//   return axios.get(baseUrl);
// };

//
// retrieve data
const getData = () => {
  const csvData = d3.csv(dataSource).then((d) => {
    console.log('d within csvData is', d)
    return d;
  })
  // .then((d) => {return d}
// );
  // console.log('longging csvData',csvData)
  return csvData;
};

  // this will run once, to load the data
//   useEffect(() => {
//     // go fetch the data using d3.csv()
//     d3.csv(dataSource)
//       .then((d) => {
//         setData(d);
        
//         if (data.length > 1) {
//           console.log("data is loaded", data);
//         }
//         // tabulate(data, cols)
//         // reactTabulate(data)
//       })
//       .catch((e) => console.log(e));
//   }, []); // end useEffect

export default { getData };
