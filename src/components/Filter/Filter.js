import React, { useState } from "react";

const Filter = ({ neoData, setFilteredData }) => {
  const [selectedBody, setSelectedBody] = useState();
  const handleBodyChange = (e) => {
    const selected = e.target.value;
    setSelectedBody(selected);

    if (selected === "") {
      setFilteredData(neoData);
    } else {
      //   alert(1);
      setFilteredData(neoData.filter((neo) => neo.name === selected));
    }
  };
  return (
    <div className="">
      {" "}
      <div>
        <select value={selectedBody} onChange={handleBodyChange}>
          <option value="">orbiting body</option>
          {neoData.map((neo, index) => (
            <option key={index}>{neo.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
