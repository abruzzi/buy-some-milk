import React from "react";
import { TodoInput } from "./TodoInput";
import { useTodo } from "./useTodo";
import { TodoList } from "./TodoList";

export interface TodoItem {
  id: string;
  content: string;
}

export const Todo = ({ items }: { items: TodoItem[] }) => {
  const {todos, addTodoItem, markItemAsDone} = useTodo(items)
  
  return (
    <div>
      <TodoInput onItemAdded={addTodoItem} />
      <TodoList todos={todos} markItemAsDone={markItemAsDone} />
    </div>
  );
}
