import { useCallback, useMemo, useState } from "react";
import { useImmer } from "immer";

import { generateId } from "/src/utils";

/* 
todo:
- id: number
- task: string
*/

function useTodos() {
  const [allTodos, setAllTodos] = useImmer([]);
  const [filterStr, setFilterStr] = useState("");

  const filteredTodos = useMemo(() => {
    return allTodos.filter((todo) => {
      return todo.message.includes(filterStr);
    });
  }, [filterStr, allTodos]);

  const addTodo = useCallback((task) => {
    setAllTodos((draft) => {
      draft.push({
        id: generateId(),
        task,
      });
    });
  }, []);

  const removeTodo = useCallback((id) => {
    setAllTodos((draft) => {
      const i = draft.findIndex((todo) => todo.id === id);
      draft.splice(i, 1);
    });
  });

  const updateTodo = useCallback((id, message) => {
    setAllTodos((draft) => {
      const todo = draft.find((todo) => todo.id === id);
      todo.message = message;
    });
  });

  const updateFilter = useCallback((newFilter) => {
    setFilterStr(newFilter);
  });

  return {
    allTodos,
    filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
    updateFilter,
  };
}

export default useTodos;
