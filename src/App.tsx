import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routing-demo/Home";
import TodoList from "./routing-demo/TodoList";
import TodoDetail from "./routing-demo/TodoDetail";
import UserList from "./routing-demo/UserList";
import NotFound from "./routing-demo/NotFound";
import Navbar from "./routing-demo/Navbar";
import CustomerTransactions from "./routing-demo/CustomerTransactions";
import Customer from "./routing-demo/Customer";
import CustomerProfile from "./routing-demo/CustomerProfile";
import RestDemo from "./routing-demo/RestDemo";
import SampleForm from "./components/SampleForm";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="p-5">
        <h2>React Routing</h2>
        <hr />
        <div className="my-4">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/rest" element={<RestDemo />} />
          <Route path="/sample-form" element={<SampleForm />} />
          <Route path="/contact-form" element={<Contact />} />
          <Route path="/customers" element={<Customer />}>
            <Route path=":id/profile" element={<CustomerProfile />} />
            <Route path=":id/transactions" element={<CustomerTransactions />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
