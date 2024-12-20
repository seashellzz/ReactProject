import React from "react";
import studentlist from "../testdata/studentlist.json";
import { useTable } from "react-table";
export default function StudentList() {

  const data = React.useMemo(() => studentlist, []);
  const columns = React.useMemo(() => [
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    
    {
      Header: "Grade",
      accessor: "grade",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Date of Birth",
      accessor: "dob",
    },
    {
      Header: "Institution",
      accessor: "institution",
    },
    
    {
      Header: "Guardian Email",
      accessor: "primary_guardian_email",
    },

  ], []
);

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

  return (
    <div className="student-list" >
        
      <div className="container">
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
          <tbody {...getTableBodyProps()}> 
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  )
                  )}

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};