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
    return d;
  })
  // .then((d) => {return d}
// );
  // console.log('longging csvData',csvData)
  return csvData;
};



export default { getData };
