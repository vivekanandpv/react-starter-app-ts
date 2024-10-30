import * as React from "react";
import { Customer } from "../models/customer.model";
import CustomerList from "./CustomerList";
import customerData from "../data.json";
import CustomerDetail from "./CustomerDetail";

interface UseCase1Props {}

const UseCase1 = (props: UseCase1Props) => {
  const [selectedCustomer, setSelectedCustomer] = React.useState<
    Customer | undefined
  >();

  const getSelectedCustomer = (c: Customer) => {
    setSelectedCustomer(c);
  };

  return (
    <>
      <div className="mb-5">
        <CustomerList
          customers={customerData}
          onCustomerSelect={getSelectedCustomer}
        />
      </div>

      <div className="mb-5">
        <CustomerDetail customer={selectedCustomer} />
      </div>
    </>
  );
};

export default UseCase1;
