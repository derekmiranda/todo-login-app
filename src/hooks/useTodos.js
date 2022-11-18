import { useCallback, useMemo, useState } from "react";
import { useImmer } from "use-immer";

import { generateId } from "/src/utils";
import { MAX_TODO_LEN } from "/src/constants";

/* 
todo:
- id: number
- task: string
*/

function useTodos() {
  const [allTodos, setAllTodos] = useImmer([]);
  const [filter, setFilter] = useState("");

  const filteredTodos = useMemo(() => {
    return allTodos.filter((todo) => {
      return todo.task.includes(filter);
    });
  }, [filter, allTodos]);

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
  }, []);

  const updateTodo = useCallback((id, task) => {
    if (task.length <= MAX_TODO_LEN) {
      setAllTodos((draft) => {
        const todo = draft.find((todo) => todo.id === id);
        todo.task = task;
      });
    }
  }, []);

  const updateFilter = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  return {
    allTodos,
    filteredTodos,
    addTodo,
    removeTodo,
    updateTodo,
    filter,
    updateFilter,
  };
}

export default useTodos;
