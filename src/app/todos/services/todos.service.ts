import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";
import { todosApi } from "../utils/constants";

@Injectable()
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(todosApi)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  createTodo(payload: Todo): Observable<Todo> {
    return this.http
      .post<Todo>(todosApi, payload)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  deleteTodo(payload: Todo): Observable<Todo> {
    console.log(payload);
    return this.http
      .delete<Todo>(`${todosApi}/${payload.id}`)
      .pipe(catchError((error) => throwError(() => error.json())));
  }

  updateTodo(payload: Todo): Observable<Todo> {
    console.log(payload);
    return this.http
      .put<Todo>(`${todosApi}/${payload.id}`, payload)
      .pipe(catchError((error) => throwError(() => error.json())));
  }
}
