import * as React from "react";
import { httpClient } from "../http.client";
import { Todo } from "../models/todo.model";

interface RestDemoProps {}

const RestDemo = (props: RestDemoProps) => {
  const doGet = () => {
    httpClient
      .get<Todo[]>("todos")
      .then((r) => console.log("GET RESPONSE", r))
      .catch((e) => console.log("GET ERROR", e));
  };

  const doPost = () => {
    httpClient
      .post<Todo>("todos", {
        userId: 2,
        id: 34,
        title: "porro aut necessitatibus eaque distinctio",
        completed: false,
      })
      .then((r) => console.log("POST RESPONSE", r))
      .catch((e) => console.log("POST ERROR", e));
  };

  const doPut = () => {
    httpClient
      .put<Todo>("todos/34", {
        userId: 2,
        id: 34,
        title: "porro aut necessitatibus eaque distinctio",
        completed: false,
      })
      .then((r) => console.log("PUT RESPONSE", r))
      .catch((e) => console.log("PUT ERROR", e));
  };

  const doPatch = () => {
    httpClient
      .patch<Todo>("todos/35", {
        userId: 2,
        id: 34,
        title: "porro aut necessitatibus eaque distinctio",
        completed: false,
      })
      .then((r) => console.log("PATCH RESPONSE", r))
      .catch((e) => console.log("PATCH ERROR", e));
  };

  const doDelete = () => {
    httpClient
      .delete("todos/45")
      .then((r) => console.log("DELETE RESPONSE", r))
      .catch((e) => console.log("DELETE ERROR", e));
  };

  return (
    <>
      <h4>Rest Demo</h4>
      <hr />
      <button className="btn btn-primary me-4" onClick={doGet}>
        GET
      </button>
      <button className="btn btn-primary me-4" onClick={doPost}>
        POST
      </button>
      <button className="btn btn-primary me-4" onClick={doPut}>
        PUT
      </button>
      <button className="btn btn-primary me-4" onClick={doPatch}>
        PATCH
      </button>
      <button className="btn btn-primary me-4" onClick={doDelete}>
        DELETE
      </button>
    </>
  );
};

export default RestDemo;
