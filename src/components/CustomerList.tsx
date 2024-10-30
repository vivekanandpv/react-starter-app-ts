import * as React from "react";
import { Customer } from "../models/customer.model";

interface CustomerListProps {
  customers: Customer[];
  onCustomerSelect: (c: Customer) => void;
}

const CustomerList = (props: CustomerListProps) => {
  return (
    <>
      <h3 className="mb-4">Customers</h3>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.customers.map((c) => (
            <tr
              key={c.id}
              style={{
                cursor: "pointer",
              }}
              onClick={() => props.onCustomerSelect(c)}
            >
              <td>{c.id}</td>
              <td>
                {c.firstName} {c.lastName}
              </td>
              <td>{c.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomerList;
