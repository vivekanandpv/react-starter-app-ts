import * as React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../store/app.store";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const user = useSelector((s: AppState) => s.user);
  return (
    <>
      <p>Username: {user.username}</p>
      <p>Country: {user.country}</p>
      <hr />
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home /
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className="active">
            Home /home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className="active">
            Todo List
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos/23" className="active">
            Todo 12
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className="active">
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/rest" className="active">
            REST demo
          </NavLink>
        </li>
        <li>
          <NavLink to="/sample-form" className="active">
            Sample Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-form" className="active">
            Contact Form
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
