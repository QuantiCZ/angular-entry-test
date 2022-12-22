import {
  createTodoSuccess,
  deleteTodoSuccess,
  loadTodos,
  loadTodosFail,
  loadTodosSuccess,
  updateTodoSuccess,
} from "./../actions/todos.action";
import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";

export interface TodosState {
  entities: { [id: number]: Todo };
  loaded: boolean;
  loading: boolean;
}

export const todosFeatureName = "todos";

export const selectTodosState =
  createFeatureSelector<TodosState>(todosFeatureName);

export const initialState: TodosState = {
  entities: {},
  loaded: false,
  loading: false,
};

export const todosReducer = createReducer(
  initialState,
  on(
    loadTodos,
    (state): TodosState => ({
      ...state,
      loading: true,
    })
  ),
  on(
    loadTodosFail,
    (state): TodosState => ({
      ...state,
      loading: false,
      loaded: false,
    })
  ),
  on(loadTodosSuccess, (state, { todos }): TodosState => {
    const entities = todos.reduce(
      (entities: { [id: number]: Todo }, todo: Todo) => {
        return {
          ...entities,
          [todo?.id]: todo,
        };
      },
      {
        ...state.entities,
      }
    );
    return {
      ...state,
      loading: false,
      loaded: true,
      entities,
    };
  }),
  on(
    createTodoSuccess,
    updateTodoSuccess,
    (state, { todo }): TodosState => {
      const entities = {
        ...state.entities,
        [todo?.id]: todo,
      };

      return {
        ...state,
        entities,
      };
    }
  ),
  on(deleteTodoSuccess, (state, { todo }): TodosState => {
    const { [todo?.id]: removed, ...entities } = state.entities;

    return {
      ...state,
      entities,
    };
  })
);
