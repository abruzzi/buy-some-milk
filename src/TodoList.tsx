import React from "react";
import {TodoItem} from "./Todo";

export const TodoList = ({
                           todos,
                           markItemAsDone,
                         }: {
  todos: TodoItem[];
  markItemAsDone: (todo: TodoItem) => void;
}) => {
  return (
    <ol>
      {todos.map((item) => (
        <li key={item.id}>
          <span>{item.content}</span>
          <span
            onClick={() => markItemAsDone(item)}
            className="material-symbols-outlined"
          >
            check_circle
          </span>
        </li>
      ))}
    </ol>
  );
};