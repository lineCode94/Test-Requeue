import React from "react";
import { Table } from "react-bootstrap";
const TableView = ({ FilteredData }) => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NEO Name</th>
            <th>Min Diameter (km)</th>
            <th>Max Diameter (km)</th>
            <th>Orbital Body</th>
          </tr>
        </thead>
        <tbody>
          {FilteredData?.map((neo) => (
            <tr key={neo?.id}>
              <td>{neo?.name}</td>
              <td>
                {neo?.estimated_diameter?.kilometers?.estimated_diameter_min?.toFixed(
                  2
                )}
              </td>
              <td>
                {neo?.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(
                  2
                )}
              </td>
              <td>{neo.close_approach_data[0]?.orbiting_body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
