import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { httpClient } from "../http.client";
import { Todo } from "../models/todo.model";

interface TodoDetailProps {}

const TodoDetail = (props: TodoDetailProps) => {
  const { id } = useParams();
  const [todo, setTodo] = React.useState<Todo | undefined>();
  const navigator = useNavigate();

  React.useEffect(() => {
    httpClient
      .get<Todo>(`todos/${id}`)
      .then((r) => setTodo((_) => r.data))
      .catch((e) => console.log(e));
  }, []);

  const toList = () => {
    navigator("/todos");
  };

  return (
    <>
      <h4>Todo Detail: {id}</h4>
      <p
        onClick={toList}
        className="link-primary"
        style={{ cursor: "pointer" }}
      >
        Back to Customers
      </p>
      <hr />
      <p>ID: {todo?.id}</p>
      <p>User Id: {todo?.userId}</p>
      <p>Title: {todo?.title}</p>
      <p>Status: {todo?.completed ? "Completed" : "Pending"}</p>
    </>
  );
};

export default TodoDetail;
