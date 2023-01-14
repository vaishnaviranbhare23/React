import React from "react";
import "./Table.css";
import "./App.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="mx-5 my-5 table__main1  shadow border">
      <th className="p-3 ms-5 text">Live Cases by Country</th>
      <div className=" table__main  overflow-auto">
        <table className="table table-striped">
          <tbody>
            {countries.map(({ country, cases }) => (
              //   Emmet tr>td*2/3/anything
              <tr>
                <td>{country}</td>
                <td>
                  <strong>{numeral(cases).format("0,0")}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
