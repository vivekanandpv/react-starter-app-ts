import * as React from "react";
import { useParams } from "react-router-dom";

const CustomerProfile = () => {
  const { id } = useParams();
  return (
    <>
      <h4>Customer Profile: ID {id}</h4>
      <ul className="list-group">
        <li className="list-group-item">Customer ID: {id}</li>
        <li className="list-group-item">Customer first name goes here...</li>
        <li className="list-group-item">Customer last name goes here...</li>
        <li className="list-group-item">Customer email goes here...</li>
        <li className="list-group-item">Customer address goes here...</li>
      </ul>
    </>
  );
};

export default CustomerProfile;
