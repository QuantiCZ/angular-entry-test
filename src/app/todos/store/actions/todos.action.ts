import { Todo } from "./../../models/todo.model";

import { createAction } from "@ngrx/store";

// load Todos
export const LOAD_TODOS = "[Todos] Load Todos";
export const LOAD_TODOS_FAIL = "[Todos] Load Todos Fail";
export const LOAD_TODOS_SUCCESS = "[Todos] Load Todos Success";

export const CREATE_TODO = "[Todos] Create Todo";
export const CREATE_TODO_FAIL = "[Todos] Create Todo Fail";
export const CREATE_TODO_SUCCESS = "[Todos] Create Todo Success";

export const DELETE_TODO = "[Todos] Delete Todo";
export const DELETE_TODO_FAIL = "[Todos] Delete Todo Fail";
export const DELETE_TODO_SUCCESS = "[Todos] Delete Todo Success";

export const UPDATE_TODO = "[Todos] Update Todo";
export const UPDATE_TODO_FAIL = "[Todos] Update Todo Fail";
export const UPDATE_TODO_SUCCESS = "[Todos] Update Todo Success";

export const loadTodos = createAction(LOAD_TODOS);
export const loadTodosFail = createAction(LOAD_TODOS_FAIL, (error) => ({
  error,
}));
export const loadTodosSuccess = createAction(
  LOAD_TODOS_SUCCESS,
  (todos: Todo[]) => ({ todos })
);

export const createTodo = createAction(CREATE_TODO, (todo: Todo) => ({
  todo,
}));
export const createTodoFail = createAction(CREATE_TODO_FAIL, (error) => ({
  error,
}));
export const createTodoSuccess = createAction(
  CREATE_TODO_SUCCESS,
  (todo: Todo) => ({
    todo,
  })
);

export const deleteTodo = createAction(DELETE_TODO, (todo: Todo) => ({
  todo,
}));
export const deleteTodoFail = createAction(DELETE_TODO_FAIL, (error) => ({
  error,
}));
export const deleteTodoSuccess = createAction(
  DELETE_TODO_SUCCESS,
  (todo: Todo) => ({
    todo,
  })
);

export const updateTodo = createAction(UPDATE_TODO, (todo: Todo) => ({
  todo,
}));
export const updateTodoFail = createAction(UPDATE_TODO_FAIL, (error) => ({
  error,
}));
export const updateTodoSuccess = createAction(
  UPDATE_TODO_SUCCESS,
  (todo: Todo) => ({
    todo,
  })
);
