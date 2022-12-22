import { selectTodosState, TodosState } from "./../reducers/todos.reducer";
import { createSelector } from "@ngrx/store";

import { selectRouterState } from "src/app/store/reducers/router.reducer";
import { Todo } from "../../models/todo.model";

const getTodosEntities = (state: TodosState) => state.entities;
// const getTodosLoading = (state: TodosState) => state.loading;
const getTodosLoaded = (state: TodosState) => state.loaded;

export const selectTodoEntities = createSelector(
  selectTodosState,
  getTodosEntities
);

export const selectAllTodos = createSelector(
  selectTodoEntities,
  (entities) => {
    console.log(entities);
    return Object.keys(entities).map((id) => entities[id]);
  }
);

export const selectAllTodosLoaded = createSelector(
  selectTodosState,
  getTodosLoaded
);

export const selectTodo = createSelector(
  selectTodoEntities,
  selectRouterState,
  (entities, router): Todo => {
    return router.state && entities[router.state.params["todoId"]];
  }
);
