import React from "react";
import institutionlist from "../testdata/institutionlist.json";
import { useTable } from "react-table";
export default function InstitutionList() {

  const data = React.useMemo(() => institutionlist, []);
  const columns = React.useMemo(() => [
    {
      Header: "Principal",
      accessor: "principal",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "School",
      accessor: "school",
    },
    {
      Header: "District",
      accessor: "district",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Institution",
      accessor: "institution",
    },

    ], []
  );

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

  return (
    <div className="institutionList" >
        
      <div className="institutionTable">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  );
};