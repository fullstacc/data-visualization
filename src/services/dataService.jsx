// const dataSource = "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/88aaa3620943b63b70e4c23e4b0831bc5cda9b4d/eurovision.csv"
const dataSource = "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/ff28ca9e84527f1a8798eede096e1c4e31bfcc53/eurovision.csv"

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
    console.log('cols within csvData is', d.columns)
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
