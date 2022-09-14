import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import {TodoItem} from "./Todo";

export const TodoInput = ({
                            onItemAdded,
                          }: {
  onItemAdded: (item: TodoItem) => void;
}) => {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({id: id, content: todo});
    }
  };

  return (
    <input
      type="text"
      data-testid="input"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};