const dataSource =
  "https://gist.githubusercontent.com/fullstacc/3f0b9cf691d27d7c3c20b582e6a4c84a/raw/0832453379cd6368558d51258786e5241bc2010e/eurovision.csv";
import * as d3 from "d3";

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
  const res = d3
    .csv(dataSource)
    .then((res) => {
      console.log("firing getData()!", res);
      // console.log('d3 reading data from dataService',res)
      return res;
    })
    .catch((e) => console.log(e));
};

export default { getData };
