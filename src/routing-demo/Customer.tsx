import * as React from "react";
import CustomerList from "./CustomerList";
import { Outlet } from "react-router-dom";

const Customer = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <CustomerList />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Customer;
