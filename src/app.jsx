import { React, useState, useEffect } from "react";
// data fetching service
import dataService from "./services/dataService.jsx";

// pages
import Home from "./pages/home.jsx";

// components
import DataTable from "./components/DataTable.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [dataStatus, setDataStatus] = useState('not loaded')

  const fetchAndSetData = () => {
    const dataToFetch = dataService.getData().then(data => setData(data))
    console.log('data is set!',data)
  };

  // fetch initial state; data source is retrieved at the
  // root and state is passed to the components requiring it
  useEffect(() => {
    fetchAndSetData();
    console.log('data is now',data)
  }, []);
  

  return (
    <>
      <Home data={data}
        dataStatus={dataStatus}/>
    </>
  );
}
