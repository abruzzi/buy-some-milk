import {useState} from "react";
import {TodoItem} from "./Todo";

export const useTodo = (items: TodoItem[]) => {
  const [todos, setTodos] = useState<TodoItem[]>(items);

  const addTodoItem = (item: TodoItem) => {
    setTodos([...todos, item]);
  };

  const markItemAsDone = (item: TodoItem) => {
    const filtered = todos.filter((todo) => todo.id !== item.id);
    setTodos(filtered);
  };

  return {
    todos,
    addTodoItem,
    markItemAsDone,
  };
};