import * as React from "react";
import { NavLink } from "react-router-dom";

const CustomerList = () => {
  return (
    <>
      <h4>Customer List</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <NavLink to="/customers/1/profile">Profile</NavLink>
            </td>
            <td>
              <NavLink to="/customers/1/transactions">Transactions</NavLink>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mahesh Kumar</td>
            <td>
              <NavLink to="/customers/2/profile">Profile</NavLink>
            </td>
            <td>
              <NavLink to="/customers/2/transactions">Transactions</NavLink>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rajesh Singh</td>
            <td>
              <NavLink to="/customers/3/profile">Profile</NavLink>
            </td>
            <td>
              <NavLink to="/customers/3/transactions">Transactions</NavLink>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Divya Sen</td>
            <td>
              <NavLink to="/customers/4/profile">Profile</NavLink>
            </td>
            <td>
              <NavLink to="/customers/4/transactions">Transactions</NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
