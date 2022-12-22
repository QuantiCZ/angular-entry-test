import {
  LOAD_TODOS,
  loadTodosSuccess,
  loadTodosFail,
  CREATE_TODO,
  createTodoSuccess,
  createTodoFail,
  deleteTodoSuccess,
  deleteTodoFail,
  DELETE_TODO,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  CREATE_TODO_SUCCESS,
  UPDATE_TODO,
  updateTodoFail,
  updateTodoSuccess,
} from "./../actions/todos.action";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodosService } from "../../services/todos.service";
import { catchError, map, of, switchMap } from "rxjs";
import { Todo } from "../../models/todo.model";
import { Go } from "src/app/store/actions/router.action";

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_TODOS),
      switchMap(() => {
        return this.todosService.getTodos().pipe(
          map((todos: Todo[]) => loadTodosSuccess(todos)),
          catchError((error) => of(loadTodosFail(error)))
        );
      })
    );
  });

  updateTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UPDATE_TODO),
      map((action: { todo: Todo }) => action.todo),
      switchMap((todo: Todo) => {
        return this.todosService.updateTodo(todo).pipe(
          map((todo) => updateTodoSuccess(todo)),
          catchError((error) => of(updateTodoFail(error)))
        );
      })
    );
  });

  createTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CREATE_TODO),
      map((action: { todo: Todo }) => action.todo),
      switchMap((todo: Todo) => {
        return this.todosService.createTodo(todo).pipe(
          map((todo: Todo) => createTodoSuccess(todo)),
          catchError((error) => of(createTodoFail({ error: error })))
        );
      })
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DELETE_TODO),
      map((action: { todo: Todo }) => action.todo),
      switchMap((todo: Todo) => {
        return this.todosService.deleteTodo(todo).pipe(
          map(() => deleteTodoSuccess(todo)),
          catchError((error) => of(deleteTodoFail({ error: error })))
        );
      })
    );
  });
  handleUserSuccess$ = createEffect(() => {
    return (
      this.actions$
        // either update or delete
        .pipe(
          ofType(
            UPDATE_TODO_SUCCESS,
            DELETE_TODO_SUCCESS,
            CREATE_TODO_SUCCESS
          ),

          map(() =>
            Go({
              path: ["/todos"],
            })
          )
        )
    );
  });
}
