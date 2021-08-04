import React from "react";
import { Todo } from "../MyComponents/Todo";

export const Todos = (props) => {
  return (
    <div>
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.map((todo) => {
        return <Todo todo={todo} onDelete={props.onDelete} />;
      })}
    </div>
  );
};
