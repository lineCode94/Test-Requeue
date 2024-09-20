import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./components/ChartVisualization/Bar";
import { Tabs, Tab } from "react-bootstrap";
import TableView from "./components/TableView/TableView";
import Filter from "./components/Filter/Filter";
function App() {
  const [neoData, setNeoData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  console.log(FilteredData);

  //fetch data
  useEffect(() => {
    // Fetch data from the NASA API
    axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((response) => {
        const neos = response?.data?.near_earth_objects;

        // Sort by average estimated diameter in descending order
        const sortedNeos = neos.sort((a, b) => {
          const avgDiameterA =
            (a.estimated_diameter.kilometers.estimated_diameter_min +
              a.estimated_diameter.kilometers.estimated_diameter_max) /
            2;
          const avgDiameterB =
            (b.estimated_diameter.kilometers.estimated_diameter_min +
              b.estimated_diameter.kilometers.estimated_diameter_max) /
            2;
          return avgDiameterB - avgDiameterA;
        });

        setNeoData(sortedNeos);
        setFilteredData(sortedNeos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Filter setFilteredData={setFilteredData} neoData={neoData} />
      <Tabs defaultActiveKey="chart" id="view-switcher" className="mb-3">
        <Tab eventKey="chart" title="Chart View">
          <Bar
            FilteredData={FilteredData}
            neoData={neoData}
            setFilteredData={setFilteredData}
          />
        </Tab>
        <Tab eventKey="table" title="Table View">
          <TableView FilteredData={FilteredData} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
