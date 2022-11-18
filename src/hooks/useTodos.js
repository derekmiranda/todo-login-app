import { useCallback, useState } from "react";
import { useImmer } from "immer";

import { generateId } from "/src/utils";

/* 
todo:
- id: number
- task: string
*/

function useTodos() {
  const [todos, setTodos] = useImmer([]);

  const addTodo = useCallback((task) => {
    setTodos((draft) => {
      draft.push({
        id: generateId(),
        task,
      });
    });
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((draft) => {
      const i = draft.findIndex((todo) => todo.id === id);
      draft.splice(i, 1);
    });
  });

  const updateTodo = useCallback((id, message) => {
    setTodos((draft) => {
      const todo = draft.find((todo) => todo.id === id);
      todo.message = message;
    });
  });

  return { todos, addTodo, removeTodo, updateTodo };
}

export default useTodos;
