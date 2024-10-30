import * as React from "react";
import { httpClient } from "../http.client";
import { Todo } from "../models/todo.model";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

interface TodoListProps {}

export const getTodos = () => {
  return httpClient.get<Todo[]>("todos").then((r) => r.data);
};

const TodoList = (props: TodoListProps) => {
  const navigator = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: "get-todos",
    queryFn: getTodos,
    refetchOnMount: false,
    // refetchInterval: 5000,
  });

  const toDetail = (id: number) => {
    navigator(`/todos/${id}`);
  };

  if (isLoading) {
    return (
      <>
        <h4>Please wait...</h4>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h4>Sorry, server didn't respond...</h4>
      </>
    );
  }

  return (
    <>
      <h4>Todo List</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((t) => (
            <tr
              key={t.id}
              style={{ cursor: "pointer" }}
              onClick={() => toDetail(t.id)}
            >
              <td>{t.id}</td>
              <td>{t.userId}</td>
              <td>{t.title}</td>
              <td>
                {t.completed ? (
                  <span className="badge text-bg-success">Completed</span>
                ) : (
                  <span className="badge text-bg-warning">Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
