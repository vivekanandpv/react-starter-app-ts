import * as React from "react";
import { Customer } from "../models/customer.model";

interface CustomerDetailProps {
  customer?: Customer;
}

const CustomerDetail = (props: CustomerDetailProps) => {
  return (
    <>
      <h4>Customer Detail</h4>
      <p>Id: {props.customer?.id}</p>
      <p>First Name: {props.customer?.firstName}</p>
      <p>Last Name: {props.customer?.lastName}</p>
      <p>Email: {props.customer?.email}</p>
      <p>Gender: {props.customer?.gender}</p>
      <p>City: {props.customer?.city}</p>
    </>
  );
};

export default CustomerDetail;
