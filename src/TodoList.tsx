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
        <li key={item.id} onClick={() => markItemAsDone(item)}>
          {item.content}
        </li>
      ))}
    </ol>
  );
};