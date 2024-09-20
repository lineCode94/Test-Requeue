import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
const Bar = () => {
  const [neoData, setNeoData] = useState([]);
  console.log(neoData);
  useEffect(() => {
    // Fetch data from the NASA API
    axios
      .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((response) => {
        const neos = response.data.near_earth_objects;

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //chart data
  const chartData = [
    ["NEO Name", "Min Diameter (km)", "Max Diameter (km)"],
    ...neoData.map((neo) => [
      neo.name,
      neo.estimated_diameter.kilometers.estimated_diameter_min,
      neo.estimated_diameter.kilometers.estimated_diameter_max,
    ]),
  ];
  const options = {
    title: "NEO Estimated Diameters (Min and Max)",
    chartArea: { width: "60%" },
    hAxis: {
      title: "Diameter (km)",
      minValue: 0,
    },
    vAxis: {
      title: "NEO Name",
    },
    bars: "horizontal",
  };
  return (
    <div>
      {" "}
      <Chart
        chartType="BarChart"
        width="100%"
        height="600px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default Bar;
