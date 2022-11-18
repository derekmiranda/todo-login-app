import { useState, useCallback } from "react";

import { MAX_TODO_LEN } from "/src/constants";

function useUpsertTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const onTodoChange = useCallback((task) => {
    if (task.length <= MAX_TODO_LEN) {
      setNewTodo(task);
    }
  }, []);

  const saveNewTodo = useCallback(() => {
    addTodo(newTodo);
    resetNewTodo();
  }, [newTodo]);

  const resetNewTodo = useCallback(() => {
    setNewTodo("");
  }, []);

  return {
    newTodo,
    onTodoChange,
    saveNewTodo,
    resetNewTodo,
  };
}

export default useUpsertTodo;
